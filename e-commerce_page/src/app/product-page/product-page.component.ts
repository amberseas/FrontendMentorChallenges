import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  image: string = '1';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectImage(id: string) {
    this.image = id;
  }

}
