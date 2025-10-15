import collect from 'collect.js';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// get all products
export async function getProducts(limit = 50, options = {}) {
    const resultList = await pb.collection('Products').getList(1, limit, {
        ...options
    })

    // retorna só os itens (produtos)
    return resultList.items
}
