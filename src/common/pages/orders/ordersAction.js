
export function getOrders(num){
    return {
        url: 'orders',
        data: {page: num}
    }
}
export function deleteOrders(id){
    return {
        
        url: 'ordersdel',
        method: 'post',
        data: {id: id}
    }
}

