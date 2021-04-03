import {createStore, combineReducers} from 'redux';
import board from '../reducers/board';
import moves from '../reducers/moves';
import player from '../reducers/player';

const store = createStore(
    combineReducers({board, moves, player}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
