var vm = new Vue({

        el: "#example",
        data: {
            name: 'vue.js'
        },
        //在methods中定义方法
        methods: {
            greet: function(event) {
                alert('hello' + this.name + '!');
                alert(event.target.tagName);
            }
        },
        el: '#example-2',
        methods: {
            say: function(msg, evnet) {
                alert(msg);
                alert(evnet.target.tagName);
                event.preventDefault()
            }
        },
        el: '#keys',
        data: {
            keyList: [{
                keyName: 'enter'
            }, {
                keyName: 'tab'
            }, {
                keyName: 'delete'
            }, {
                keyName: 'esc'
            }, {
                keyName: 'space'
            }, {
                keyName: 'up'
            }, {
                keyName: 'down'
            }, {
                keyName: 'left'
            }, {
                keyName: 'right'
            }]
        }
    })
    // vm.greet()
