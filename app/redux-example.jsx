var redux = require('redux');

console.log('starting redux example');

var stateDefault={
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
var nextHobbyId =1;
var nextMovieId = 1;
var reducer = (state = stateDefault,action) => {
    // state = state || {name: 'Anonymous'};
    
    console.log('new action ',action);

    switch(action.type){
        case 'CHANGE_NAME':
            return{
                ...state,
                searchText: action.name
            };
        case 'ADD_HOBBY':
            return{
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };
        case 'ADD_MOVIE':
            return{
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            }
        case 'REMOVE_HOBBY':
            return{
                ...state,
                hobbies:state.hobbies.filter((hobby)=>hobby.id !== action.id)
            }
        case 'REMOVE_MOVIE':
            return{
                ...state,
                movies:state.movies.filter((movie)=> movie.id !== action.id)
            }
        dafault:
            return state;
    }
};

var store = redux.createStore(reducer,redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
));

//subscribe to change
var unsubscribe = store.subscribe(()=>{
    var state = store.getState();

    console.log('name is ',state.name);
    document.getElementById('app').innerHTML=state.name;

    console.log('NEw state ',store.getState());
});
//unsubscribe();

var currentState = store.getState();
console.log('currentState',currentState);

store.dispatch({
    type:'CHANGE_NAME',
    name: 'Andrew'
});

store.dispatch({
    type:'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type:'CHANGE_NAME',
    name: 'emily'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'MAd MAx',
    gender: 'Action'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'lajanje na zvezde',
    gender: 'Action'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
})
// console.log('name should be andrew',store.getState());