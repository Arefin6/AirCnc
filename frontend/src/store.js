import { applyMiddleware, combineReducers, createStore } from "redux"
 import {composeWithDevTools} from 'redux-devtools-extension';
 import thunk from 'redux-thunk'

const reducer = combineReducers({
 

})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null

const initialState = {
    userLogin:{userInfo:userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store