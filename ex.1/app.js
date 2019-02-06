
//Define um novo componente simples
Vue.component('todo-item-simple', {
    template: "<li>This is a todo</li>"
})

//Define um novo componente com props
Vue.component('todo-item', {
    // O componente todo-item agora aceita propriedades
    // "prop", que consegue ter atributos customizaveis.
    // Este "prop" se chama "todo".
    props: ['todo'],
    template: "<li>{{ todo.text }}</li>"
})

const app = new Vue({
    el: "#app",
    data: {
        seen: true,
        array: [
            {text: 'Obj01'},
            {text: 'Obj02'},
            {text: 'Obj03'}
        ],
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ],
        message: "You loaded this page on " + new Date().toLocaleDateString()
    },
    methods: {
        showMessage: function () {
            this.message = this.message.split(' ').reverse().join(' ')
        }
    }
});