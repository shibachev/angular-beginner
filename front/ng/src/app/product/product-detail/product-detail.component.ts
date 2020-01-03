import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.productService.get(this.id).subscribe((res: Product) => {
      this.product = res;
    });
  }

  /**
   * backToList button click event handler.
   */
  backToList() {
    this.router.navigate([`/products`]);
  }

  /**
   * edit button click event handler.
   */
  edit() {
    this.router.navigate([`/products/${this.id}/edit`]);
  }
}
