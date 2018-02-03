import { createAction } from 'redux-actions'
import { goods} from 'api';
import { createAjaxAction } from 'utils'

export const requestGoodsList = createAction('request goods list')
export const receiveGoodsList = createAction('receive goods list')
export const fetchGoodsList = createAjaxAction(goods.goodsList, requestGoodsList, receiveGoodsList)


