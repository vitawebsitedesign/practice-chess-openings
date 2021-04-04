import {createStore, combineReducers} from 'redux';
import ai from '../reducers/ai';
import board from '../reducers/board';
import moves from '../reducers/moves';
import player from '../reducers/player';

const store = createStore(
    combineReducers({ai, board, moves, player}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
