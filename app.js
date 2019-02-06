const app = new Vue({
    el: "#app",
    data: {
        seen: true,
        array: [
            {text: 'Obj01'},
            {text: 'Obj02'},
            {text: 'Obj03'}
        ],
        message: "You loaded this page on " + new Date().toLocaleDateString()
    },
    methods: {
        showMessage: function () {
            this.message = this.message.split(' ').reverse().join(' ')
        }
    }
});