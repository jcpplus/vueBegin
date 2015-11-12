var vm = new Vue({

    el: "#example-1",
    data: {
        message: '',
        checked: true, //单个勾选框，逻辑值
        checkedNames: [], //多个勾选框，绑定到同一个数组,
        picked: '',
        selected: '',
        selected: []
    }

});

var vm2 = new Vue({

    el: "#example2",
    data: {
        selected: 'A',
        options: [{
            text: 'One',
            value: 'A'
        }, {
            text: 'Two',
            value: 'B'
        }, {
            text: 'Three',
            value: 'C'
        }]
    }

})
