import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [],
  providers: [],
  exports: [
    CommonModule,
    MatDividerModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [],
})
export class SharedModule { }
