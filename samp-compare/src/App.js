import React, { Component } from 'react';
import { BrowserRouter, browserHistory } from 'react-router-dom'
import { Provider } from 'react-redux'
import intl from 'react-intl-universal';
import cookie from 'react-cookies'
import { emit } from "./components/utils/emit";
import hisroty from './history/History'
import Layouts from '../src/layouts/Layouts'
import store from './stores/store'
import locales from './locales/locales'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      antdLang: locales.en_US,  // 修改antd  组件的国际化
    }
  }
  componentDidMount() {
    emit.on('change_language', lang => this.loadLocales(lang)); // 监听语言改变事件
    console.log("intl.options.currentLocale=", intl.options.currentLocale)
    this.loadLocales(); // 初始化语言
  }
  loadLocales(lang = "en_US") {
    if(cookie.load("lang")){
      lang = cookie.load("lang")
    }else{
      lang = "en_US"
    }
    intl.init({
      currentLocale: lang,  // 设置初始语音
      locales,
    }).then(() => {
      this.setState({
        antdLang: lang === 'zh_CN' ? locales.zh_CN : locales.en_US
      });
    });
    console.log("this.state.antdLang=",this.state.antdLang)
  }
  render() {
    return (
      <Provider store={store} locale={this.state.antdLang}>
        <BrowserRouter hisroty={hisroty} >
          <Layouts />
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
