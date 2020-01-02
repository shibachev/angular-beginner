import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
  exports: [
    SharedModule,
  ],
  schemas: [],
  bootstrap: [],
})
export class ProductModule { }
