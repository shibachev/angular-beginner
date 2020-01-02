import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  id = 1;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  showDetail() {
    this.router.navigate([`/products/${this.id}`]);
  }
}
