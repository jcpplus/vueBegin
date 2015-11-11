var vm = new Vue({

    el: "#example",
    data: {
        parentMessage: 'parent',
        items: [{
            message: 'foo'
        }, {
            message: 'bar'
        }]
    }

})
var vm1 = new Vue({
    el: '#repeat-object',
    data: {
        object: {
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        }
    }
});

var vm2 = new Vue({

    el: "#vvv"

})
