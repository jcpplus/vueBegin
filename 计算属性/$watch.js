var vm = new Vue({
    el: '#example-1',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullNama: 'Foo Bar'
    },
    computed: {
        get: function() {
            return this.firstName + ' ' + this.lastName;
        },

        set: function(newValue) {
 var names = newValue.split(' ');
      this.firstName = names[0];
      this.lastName = names[names.length - 1];
        }
    }
});

vm.$watch('firstName', function(val){
    this.fullNama = val + ' '+ this.lastName;
});

vm.$watch('lastName', function(val) {
    this.fullNama = this.firstName + " " + val;
})
