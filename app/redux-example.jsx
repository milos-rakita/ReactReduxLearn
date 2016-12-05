var redux = require('redux');

console.log('starting redux example');

var reducer = (state = {name: 'Anonymous'},action) => {
    // state = state || {name: 'Anonymous'};
    


    return state;
};
var store = redux.createStore();

var currentState = store.getState();
console.log('currentState',currentState);
