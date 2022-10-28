import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Product {
  company: string,
  title: string,
  images: string[],
  discription: string,
  priceNow: string,
  discount: string,
  priceBefore: string,
  amount: number
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartChanged = new Subject<Product[]>();

  amount: number = 0;

  cart: Product[] = [];

  product: Product = {
    company: 'Sneaker company',
    title: 'Fall limited edition sneakers',
    images: ['../../assets/images/image-product-1.jpg',
      '../../assets/images/image-product-2.jpg',
      '../../assets/images/image-product-3.jpg',
      '../../assets/images/image-product-4.jpg',
    ],
    discription: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    priceNow: '125.00',
    discount: '50%',
    priceBefore: '250.00',
    amount: 0,
  };

  getProduct() {
    return this.product;
  }
}
