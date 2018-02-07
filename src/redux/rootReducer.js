import {combineReducers} from 'redux'

import goods from '../common/pages/goods/goodsReducer'
import orders from '../common/pages/orders/ordersReducer'

export default combineReducers({
    goods,
    orders
    
})