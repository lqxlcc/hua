import { combineReducers } from 'redux'
import * as todoList from './todoList'
import * as goodsList from './goods'
const rootReducer = combineReducers({
  ...todoList,
  ...goodsList
  
})

export default rootReducer