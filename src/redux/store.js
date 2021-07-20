import { createStore, combineReducers  } from "redux"
import { utilReducer as reducer } from './reducers/utilReducer'

const store = createStore(combineReducers({utils: reducer}), {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store