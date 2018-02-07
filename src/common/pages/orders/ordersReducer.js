import * as ajaxConstants from '../../../constants/ajaxConstants'
import * as ordersConstants from './ordersConstants'

export default function ordersReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || ordersConstants.ADDCART_RQUESTING):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            
            newState.status = 1;
            newState.result = action.result.results[0];
            newState.totalcount = action.result.results[1];
            newState.orders = action.result.results[2];
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || ordersConstants.ADDCART_RQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case ordersConstants.ADDCART_RQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}