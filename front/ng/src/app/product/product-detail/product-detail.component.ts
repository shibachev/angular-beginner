import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.product = new Product(
      1,
      'Angular入門書「天地創造の章」',
      300,
      '神は云った。「Angularあれ」。するとAngularが出来た。',
    );
  }

  backToList() {
    this.router.navigate(['/products']);
  }

}
