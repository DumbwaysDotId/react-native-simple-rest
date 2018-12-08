import { createStore, applyMiddleware } from 'redux'
import categoriesReducer from './reducers'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

export default createStore(
    categoriesReducer,
    applyMiddleware(
        // logger,
        promiseMiddleware()
    )
)