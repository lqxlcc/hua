
import * as goodsConstants from './goodsConstants';

export function getGoods(){
    return {
        url: 'goods',
        data: {page: 1}
    }
}

export function addCart(gid){
    return {
        types: [goodsConstants.ADDCART_RQUESTING, goodsConstants.ADDCART_RQUESTED, goodsConstants.ADDCART_RQUESTERROR],
        url: 'addcart',
        method: 'post',
        data: {proid: gid}
    }
}