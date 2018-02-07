import * as ajaxConstants from '../../../constants/ajaxConstants'
import * as ordersConstants from './ordersConstants'

export function getOrders(num){
    return {
        url: 'orders',
        data: {page: num}
    }
}
export function deleteOrders(id){
    return {
        types: [ordersConstants.ADDCART_RQUESTING, ordersConstants.ADDCART_RQUESTED, ordersConstants.ADDCART_RQUESTERROR],
        url: 'ordersdel',
        method: 'post',
        data: {id: id}
    }
}

