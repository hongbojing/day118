/**
 * Created by hongboing on 10/20/15.
 */
var demo = new Vue({
    el: '#demo',
    data: {
        parentMsg: 'Hello',
        items: [
            { childMsg: 'Foo' },
            { childMsg: 'Bar' }
        ]
    }
});

new Vue({
    el: '#tags',
    data: {
        tags: ['JavaScript', 'MVVM', 'Vue.js']
    }
});

new Vue({
    el: '#users',
    data: {
        users: [
            { name: 'Foo Bar', email: 'foo@bar.com' },
            { name: 'John Doh', email: 'john@doh.com' }
        ]
    }
});