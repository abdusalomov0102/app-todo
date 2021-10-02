import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialStore = {};
const middleware = [thunk];

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store;

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
    store = createStore(
        rootReducer,
        initialStore,
        compose(
            applyMiddleware(...middleware),
            ReactReduxDevTools
        )
    );
} else {
    store = createStore(
        rootReducer,
        initialStore,
        compose(
            applyMiddleware(...middleware)
        )
    );
}

export default store;


// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';
//
// const middlewares = [thunk];
// let composeEnhancer = compose;
//
// if (process.env.NODE_ENV === 'development') {
//     composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }
//
// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)));
//
//
//
// export default store;