new Vue({
    el: '#demo',
    data: {
        n: 0
    },
    methods: {
        onClick: function (e) {
            console.log(e.target.tagName) // "A"
            console.log(e.targetVM === this) // true
        }
    }
});

new Vue({
    el: '#list',
    data: {
        items: [
            { text: 'one', done: true },
            { text: 'two', done: false }
        ]
    },
    methods: {
        toggle: function (item) {
            item.done = !item.done
        }
    }
});