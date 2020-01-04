import { ProductService } from './../../shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  displayColumns = [
    {
      name: 'id',
      display: 'ID',
    },
    {
      name: 'name',
      display: '名前',
    },
    {
      name: 'price',
      display: '価格',
    },
  ];
  dataSource: MatTableDataSource<Product>;

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.productService.list().subscribe((res: Product[]) => {
      this.products = res;
      this.dataSource = new MatTableDataSource(this.products);
    });
  }

  get displayColumnNames(): string[] {
    return this.displayColumns.map(i => i.name);
  }

  /**
   * table row click event handler.
   */
  clickRow(e: any) {
    this.router.navigate([`/products/`, e.id]);
  }
}
