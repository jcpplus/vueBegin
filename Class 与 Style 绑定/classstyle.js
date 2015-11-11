var vm = new Vue({

    el: "#class",
    data: {
        isA: false,
        isB: true
    }

})


//对象语法
var vm2 = new Vue({

    el: "#demo",
    data:  {
        classObject: {
            'alert-info' : true,
            'alert-success' : false
        }
    }

})

// 数组语法
var vm3 = new Vue({

    el: "#demo1",
    data: {
        classA: 'alert-info',
        classB: 'alert-success',
    }

})
var vm4 = new Vue({

    el: "#demo2",
    data: {
        isB: true
    }

})

var inlineS = new Vue({

    el: "#inlineStyle1",
    data: {
        activeColor: 'red',
        fontSize: 14,
        styleObject: {
            fontSize: '16px',
            color: 'blue'
        }
    }

})
