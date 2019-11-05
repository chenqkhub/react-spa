/**
 * 该方法用于生成自定义panel
 */
const generatorPanel = {
    setTitle = (title)=>{
        panel.title = title;
    },
    setSize = (size)=>{
        panel.size = size
    },
    setFinishLable = (save)=>{
        panel.finish = save;
    },
    setCancel = (cancel)=>{
        panel.cancel = cancel;
    },
    setFinishFunction = (func)=>{
        panel.finishFunction = func
    },
    setCancelFunction = (func)=>{
        panel.cancelFunction = func
    }
    
}
export default generatorPanel