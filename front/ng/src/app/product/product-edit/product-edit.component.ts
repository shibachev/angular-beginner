import { ProductService } from './../../shared/services/product.service';
import { Product } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
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
   * save saves data.
   */
  save() {
    // TODO: save data.

    this.router.navigate([`/products`]);
  }

}
