import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import logger from "redux-logger";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// import {Store } from 'redux';
// reducers below

// feeling reducer
const feelingReducer = (state = '', action) => {
	// console.log('feeling reducer reducer:', state);
	// console.log('feeling reducer action:', action);
	// console.log('feeling reducer action:', action.payload);
	if (action.type === 'SET_FEELING') {
		return state + action.payload;
	}
	return state;
};
// understanding reducer
const understandingReducer = (state = '', action) => {
	// console.log('understanding reducer reducer:', state);
	// console.log('understanding reducer action:', action);

	if (action.type === 'SET_UNDERSTANDING') {
		return state + action.payload;
	}
	return state;
};
// support reducer
const supportedReducer = (state = '', action) => {
	// console.log('support reducer reducer:', state);
	// console.log('support reducer action:', action);

	if (action.type === 'SET_SUPPORTED') {
		return state + action.payload;
	}
	return state;
};
// comments reducer
const commentsReducer = (state = '', action) => {
	// console.log('comments reducer reducer:', state);
	// console.log('comments reducer action:', action);

	if (action.type === 'SET_COMMENTS') {
		return state + action.payload;
	}
	return state;
};

// store instance
const storeInstance = createStore(
	// reducers,
	combineReducers({
		feelingReducer,
        understandingReducer,
        supportedReducer,
        commentsReducer
	}),
	applyMiddleware(logger)
);

// for the below: might need this   :

{
	/* <Provider store={storeInstance}>
    <App />
    </Provider>, */
}
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
	<Provider store={storeInstance}>
	  <App />
	</Provider>,
	document.getElementById("root")
  );

export { storeInstance };
