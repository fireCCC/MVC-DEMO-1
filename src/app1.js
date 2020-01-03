import './app1.css'
import Vue from 'vue'


//数据相关都放到m

// const m = new Model({
//     data: {
//         n: parseFloat(localStorage.getItem('n') || 100)
//     },
//     update(data) {
//         Object.assign(m.data, data)
//         m.trigger('m-updated')
//         localStorage.setItem('n', m.data.n)
//     },
// })


//其他都放到C
const init = (el) => {
    new Vue({
        el: el,
        data: {
            n: parseFloat(localStorage.getItem('n') || 100),
        },
        methods: {
            add() {
                // m.update({n: m.data.n + 1})
                this.n += 1
            },
            minus() {
                // m.update({n: m.data.n - 1})
                this.n -= 1
            },
            mul() {
                // m.update({n: m.data.n * 2})
                this.n *= 2
            },
            div() {
                // m.update({n: m.data.n / 2})
                this.n /= 2
            },
        },
        watch: {
            n(){
                localStorage.setItem('n', this.n)
            }
        },
        template: `
        <section>
            <div class="output">
                <span id="number">{{n}}</span>
            </div>
            <div class="actions">
                <button @click="add">+1</button>
                <button @click="minus">-1</button>
                <button @click="mul">*2</button>
                <button @click="div">/2</button>
            </div>
        </section>
        `
    })
    return 
    new View({
        el: el,
        data: m.data,
        html: `
        <div>
            <div class="output">
                <span id="number">{{n}}</span>
            </div>
            <div class="actions">
                <button id="add1">+1</button>
                <button id="minus1">-1</button>
                <button id="mul2">*2</button>
                <button id="divide2">/2</button>
            </div>
        </div>
        `,
        render(data) {
            const n = data.n
            if (this.el.children.length !== 0) {
                this.el.empty()
            }
            $(this.html.replace('{{n}}', n)).appendTo(this.el)
        },
        events: {
            'click #add1': 'add',
            'click #minus1': 'minus',
            'click #mul2': 'mul',
            'click #divide2': 'divide',
        },
        add() {
            m.update({n: m.data.n + 1})
        },
        minus() {
            m.update({n: m.data.n - 1})
    
        },
        mul() {
            m.update({n: m.data.n * 2})
        },
        divide() {
            m.update({n: m.data.n / 2})
        },
        
    })
}

export default init


