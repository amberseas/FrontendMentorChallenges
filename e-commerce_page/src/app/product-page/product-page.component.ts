import { Component } from '@angular/core';
import { Product, ProductService } from './product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export default class ProductPageComponent {
  imageIndex: number = 0;

  amount: number = 0;

  isGalleryVisable = false;

  product: Product;

  constructor(private productService: ProductService) {
    this.product = this.productService.getProduct();
  }

  onSelectImage(id: number) {
    this.imageIndex = id;
  }

  onChangeImage(direction: string) {
    if (direction === '-') {
      if (this.imageIndex > 0) {
        this.imageIndex -= 1;
      } else {
        this.imageIndex = 3;
      }
    } else if (direction === '+') {
      if (this.imageIndex < 3) {
        this.imageIndex += 1;
      } else {
        this.imageIndex = 0;
      }
    }
  }

  toggleView() {
    this.isGalleryVisable = !this.isGalleryVisable;
  }

  onChangeAmount(operation: string) {
    if (this.amount === 0 && operation === '-') return;
    if (operation === '-') {
      this.amount -= 1;
    } else if (operation === '+') {
      this.amount += 1;
    }
    this.productService.amount = this.amount;
  }

  onAddToCart() {
    if (this.amount) {
      let index: number | null = null;

      this.productService.cart.filter((p, i) => {
        if (p.title === this.product.title) {
          index = i;
        }
        return index;
      });

      if (index !== null) {
        this.productService.cart[index].amount += this.amount;
      } else {
        this.productService.cart.push({ ...this.product, amount: this.amount });
      }

      this.productService.cartChanged.next(this.productService.cart);
    }
  }
}
