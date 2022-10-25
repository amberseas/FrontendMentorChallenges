import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  imageIndex: number = 0;
  amount: number = 0;
  isGalleryVisable = false;

  product = {
    company: "Sneaker company",
    title: "Fall limited edition sneakers",
    images: ['../../assets/images/image-product-1.jpg', 
              '../../assets/images/image-product-2.jpg',
              '../../assets/images/image-product-3.jpg',
              '../../assets/images/image-product-4.jpg',
            ],
    discription: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    priceNow: '$125.00',
    discount: '50%',
    priceBefore: '$250.00'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSelectImage(id: number) {
    this.imageIndex = id;
  }

  onChangeImage(direction: string) {
    if(direction === '-') {
      this.imageIndex > 0 ? this.imageIndex-- : this.imageIndex = 3;
    } else if (direction === '+') {
      this.imageIndex < 3 ? this.imageIndex++ : this.imageIndex = 0;
    }
  }

  toggleView() {
    this.isGalleryVisable = !this.isGalleryVisable;
  }

}
