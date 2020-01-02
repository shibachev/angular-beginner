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
  id = 1;
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
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.products = [
        new Product(
          1,
          'Angular入門書「天地創造の章」',
          3800,
          '神は云った。「Angularあれ」。するとAngularが出来た。',
        ),
        new Product(
          2,
          'Angularを覚えたら、年収も上がって、女の子にももてて、人生が変わりました！',
          410,
          '年収300万のSEが、Angularと出会う。それは、小さな会社の社畜が始めた、最初の抵抗だった。',
        ),
        new Product(
          3,
          '異世界転生から始めるAngular生活(1)',
          680,
          'スパゲッティの沼でデスマーチ真っ最中の田中。過酷な日々からの現実逃避か彼は、異世界に放り出され、そこでAngularの入門書を拾う。現実逃避でさえ、プログラミングをするしかない彼に待ち受けるのは!?',
        ),
      ];
      this.dataSource = new MatTableDataSource(this.products);
    }, 3000);
  }

  get displayColumnNames(): string[] {
    return this.displayColumns.map(i => i.name);
  }

  showDetail() {
    this.router.navigate([`/products/${this.id}`]);
  }
}
