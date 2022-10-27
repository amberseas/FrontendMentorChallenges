import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product, ProductService } from 'src/app/product-page/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  isEmpty: boolean = true;
  cart: Product[];
  sub: Subscription | undefined;

  constructor(private productService: ProductService) { 
    this.cart = this.productService.cart;
  }

  ngOnInit(): void {
    this.sub = this.productService.cartChanged.subscribe(
      (cart: Product[]) => {
        this.cart = cart;
        if(this.cart.length > 0) this.isEmpty = false;
      }
    )
  }

  onEmptyCart() {
    this.productService.cart = [];
    this.isEmpty = true;
    this.productService.cartChanged.next(this.productService.cart)
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
