import React, { Component } from 'react';
import { Input, Tag, Tooltip, Icon } from 'antd';
import _ from 'lodash'
class SampTags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: this.props.tags,
            inputVisible: false,
            inputValue: '',
        }
    }
    //处理tags
    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let tags = this.state.tags;
        if (inputValue && _.indexOf(tags, inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        this.setState({
            tags: tags,
            inputVisible: false,
            inputValue: '',
        });
        console.log(this.state)
        if (this.props.type === "suffix") {
            this.props.getSuffixTags(tags)
        } else if (this.props.type === "full email") {
            this.props.getFullEmallTags(tags)
        } else if (this.props.type === "custom") {
            this.props.getCustomTags(tags)
        } else {
            this.props.getTags(tags)
        }
    };

    saveInputRef = input => (this.input = input);
    render() {
        const { tags, inputVisible, inputValue } = this.state;
        return (
            <div>
                {tags && tags.map((tag, index) => {
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <Tag style={{marginLeft:"5px"}} color="#108ee9" key={tag} closable={index !== 0} onClose={() => this.handleClose(tag)}>
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </Tag>
                    );
                    return isLongTag ? (
                        <Tooltip title={tag} key={tag}>
                            {tagElem}
                        </Tooltip>
                    ) : (
                            tagElem
                        );
                })}
                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 150 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}
                {!inputVisible && (
                    <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                        <Icon type="plus" /> New Attribute
                    </Tag>
                )}
            </div>
        );
    }
}

export default SampTags;