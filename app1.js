var exampleDate = {
    name: 'vue.js'
}
var exampleVue = new Vue({

    el: "#example-1",
    data: exampleDate

});
var exampleVM2 = new Vue({

    el: "#example-2",
    data: {
        greeting: true
    }

})
new Vue({
    el: '#demo',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    },
    data: {
        newTodo: '',
        todos: [{
            text: 'Add some todos'
        }]
    },
    methods: {
        addTodo: function() {
            var text = this.newTodo.trim()
            if (text) {
                this.todos.push({
                    text: text
                })
                this.newTodo = ''
            }
        },
        removeTodo: function(index) {
            this.todos.splice(index, 1)
        }
    }
})
