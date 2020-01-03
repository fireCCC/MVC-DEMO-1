import './app2.css'
import $ from 'jquery'
import Model from './base/Model.js'
import View from './base/View.js'
import EventBus from './base/EventBus.js';
import Vue from 'vue'
const eventBus = new EventBus()

//数据相关都放到m

const localKey = 'app2-index';

const m = new Model ({
    data: {
        index: parseInt(localStorage.getItem(localKey)) || 0

    },
    update(data) {
        Object.assign(m.data, data)
        m.trigger('m-updated')
        localStorage.setItem('app2-index', m.data.index)
    },
})

//其他都放到C

const init = (el) => {
    new Vue({
        el: el,
        data: {
            index: 0
        },
        template: `
        <section id="app2">
            <ol class="tab-bar">
                <li :class="index === 0 ? 'selected' : ''" data-index="0"
                    @click="index=0"><span>1</span></li>
                <li :class="index === 1 ? 'selected' : ''" data-index="1"
                    @click="index=1"><span>2</span></li>
            </ol>
            <ol class="tab-content">
                <li :class="index === 0 ? 'active' : ''">内容1</li>
                <li :class="index === 1 ? 'active' : ''">内容2</li>
            </ol>
        </section>
        `
    })
    return
    new View({
        el: el,
        data: m.data,
        html: (index)=>{
        return `
        <div>
            <ol class="tab-bar">
                <li class="${index === 0 ? 'selected' : ''}" data-index="0"><span>1</span></li>
                <li class="${index === 1 ? 'selected' : ''}" data-index="1"><span>2</span></li>
            </ol>
            <ol class="tab-content">
                <li class="${index === 0 ? 'active' : ''}">内容1</li>
                <li class="${index === 1 ? 'active' : ''}">内容2</li>
            </ol>
        </div>
        `
        },
        render(data) {
            const index = data.index
            if (this.el.children.length !== 0) {
                this.el.empty()
            }
            $(this.html(index)).appendTo(this.el)
        },
        events: {
            'click .tab-bar li': 'toggle',
        },
    
        toggle(e) {
            console.log('toggle', e.currentTarget.dataset.index)
            const index = parseInt(e.currentTarget.dataset.index)
            m.update({index: index})
        },
    })
}



export default init
