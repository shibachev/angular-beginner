import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
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
