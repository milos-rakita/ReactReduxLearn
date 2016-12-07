var redux = require('redux');

console.log('starting redux example');

//name reducer and action generators
//----------------------------------
var nameReducer = (state='Anonymous',action) =>{
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

var changeName = (name) =>{
    return{
        type: 'CHANGE_NAME',
        name
    }
};

//Hobbies reducer and action generators
//----------------------------------
var nextHobbyId =1;
var hobbiesReducer = (state=[],action) =>{
    switch(action.type){
        case 'ADD_HOBBY':
            return [
                ...state,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby)=>hobby.id !== action.id);
        default:
            return state;
    }
}
var addHobby = (hobby)=>{
    return{
        type:'ADD_HOBBY',
        hobby
    }
};
var removeHobby = (id)=>{
    return{
        type:'REMOVE_HOBBY',
        id
    }
};

//Movies reducer and action generators
//----------------------------------
var nextMovieId = 1;
var moviesReducer = (state=[],action)=>{
    switch (action.type) {
        case 'ADD_MOVIE':
            return[
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre:action.genre
                }
            ]
        case 'REMOVE_MOVIE':
            return state.filter((movie)=> movie.id !== action.id)
        default:
            return state;
    }
};
var addMovie = (title,gender)=>{
    return{
        type: 'ADD_MOVIE',
        title,
        gender
    }
};
var removeMovie = (id)=>{
    return{
        type:'REMOVE_MOVIE',
        id
    }
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});

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

store.dispatch(changeName('Andrew'));
store.dispatch(addHobby('Running'));
store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));
store.dispatch(addMovie('Lajanje na zvezde', 'Komedija'));
store.dispatch(addMovie('Lepa sela lepo gore','Akcija'));
store.dispatch(removeMovie(1));
// console.log('name should be andrew',store.getState());