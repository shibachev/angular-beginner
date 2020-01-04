import { ProductService } from './../../shared/services/product.service';
import { Product } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id: string;
  productForm = this.formBuilder.group({
    name: [''],
    price: ['', Validators.min(100)],
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

  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }

  ngOnInit() {
    this.productService.get(this.id).subscribe((res: Product) => {
      this.productForm.setValue({
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
      name,
      price,
      description,
    } = this.productForm.getRawValue();
    this.productService.update(this.id, new Product(name, price, description));
    this.router.navigate([`/products`, this.id]);
  }

  /**
   * cancel navigate to detail page.
   */
  cancel() {
    this.router.navigate([`/products`, this.id]);
  }
}
