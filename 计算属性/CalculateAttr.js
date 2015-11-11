var vm = new Vue({
    el: '#example-1',
    data : {
        a : 1
    },
    computed: {
        b: function(){
            return this.a + 1;
        }
    }
})
