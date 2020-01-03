import EventBus from './EventBus.js'

const error = console && console.error && console.error.bind(console)
class Model extends EventBus{
    constructor(options) {
        super()
        const actions = ['data','create','delete','update','get']
        actions.forEach((item)=>{
            if(item in options){
                this[item] = options[item]
            }
        }) 
    }
    create() {
        error('还没实现create')
    }
    delete() {
        error('还没实现delete')
    }
    update() {
        error('还没实现update')
    }
    get() {
        error('还没实现get')
    }
}

export default Model