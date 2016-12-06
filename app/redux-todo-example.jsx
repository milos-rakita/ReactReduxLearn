var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
     searchText:'',
     showComplate:false,
     todos:[]
};
var reducer = (state = stateDefault,action) =>{
    switch(action.type){
        case 'CHANGE_SEARCH_TEXT':
            return{
                ...state,
                searchText:action.searchText
            };
        dafault:
            return state;
    }
};
var store = redux.createStore(reducer,redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
store.subscribe(()=>{
    var state = store.getState();

    document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState',store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'something else'
});

console.log('searchText should be "work"',store.getState());