import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  getProductsData() {
    return [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: '狗飼料',
            description: '2袋',
            image: 'https://www.hotpets.com.tw/wp-content/uploads/2020/12/Pixabay_Mat-Coulton-min.jpg',
            price: 87,
            category: '食物',
            quantity: 24,
            inventoryStatus: '讚啦',
            rating: 5
        },
        {
          id: '1002',
          code: 'zz21cz3c1',
          name: '黑武士衣服',
          description: '1件',
          image: 'https://cdn01.pinkoi.com/product/ENLWerJW/0/4/640x530.jpg',
          price: 249,
          category: '衣服',
          quantity: 2,
          inventoryStatus: '還行',
          rating: 3
        },
        {
          id: '1003',
          code: '244wgerg2',
          name: '遛狗繩',
          description: '1條',
          image: 'https://cdn2.ettoday.net/images/1117/1117560.jpg',
          price: 29,
          category: '寵物用品',
          quantity: 25,
          inventoryStatus: '我才不要',
          rating: 5
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: '牛肉條',
            description: '0.2條',
            image: 'https://gomopetfood.com/uploads/product/images/19/%E7%89%9B%E8%82%89%E6%A2%9D2.jpg',
            price: 172,
            category: '食物',
            quantity: 61,
            inventoryStatus: '讚啦',
            rating: 4
        },
        {
            id: '1004',
            code: 'h456wer53',
            name: '球',
            description: '壞了',
            image: 'https://img.ltn.com.tw/Upload/playing/page/2020/06/22/200622-23625-02-uoJNT.jpg',
            price: 15,
            category: '玩具',
            quantity: 73,
            inventoryStatus: '還行',
            rating: 4
        }
    ];
}

getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
}

getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
}

getProducts() {
    return Promise.resolve(this.getProductsData());
}
/*
getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
}

getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
} */
}
