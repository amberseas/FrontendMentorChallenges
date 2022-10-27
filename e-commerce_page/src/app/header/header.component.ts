import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product, ProductService } from '../product-page/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  amount: number = 0;
  sub: Subscription | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.sub = this.productService.cartChanged.subscribe(
      (cart: Product[]) => {
        this.amount = 0;
        for(let product of cart){
          this.amount += product.amount
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
