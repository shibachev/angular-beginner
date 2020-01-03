import { ProductService } from './../../shared/services/product.service';
import { Product } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id: number;
  productForm = this.formBuilder.group({
    id: [''],
    name: [''],
    price: [''],
    description: [''],
  });

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.productService.get(this.id).subscribe((res: Product) => {
      this.productForm.setValue({
        id: res.id,
        name: res.name,
        price: res.price,
        description: res.description,
      });
    });
  }

  /**
   * save saves data.
   */
  save() {
    const {
      id,
      name,
      price,
      description,
    } = this.productForm.getRawValue();
    this.productService.update(new Product(id, name, price, description));
    this.router.navigate([`/products`, this.id]);
  }

  /**
   * cancel navigate to detail page.
   */
  cancel() {
    this.router.navigate([`/products`, this.id]);
  }
}
