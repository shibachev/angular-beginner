import { Product } from 'src/app/shared/models/product';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private db: AngularFirestore,
  ) { }

  get(id: string): Observable<Product> {
    return this.db.doc<Product>(`products/${id}`).valueChanges();
  }

  list(): Observable<Product[]> {
    return this.db.collection<Product>('products').valueChanges({
      idField: 'id'
    });
  }

  update(id: string, product: Product): void {
    const data = {
      name: product.name,
      price: product.price,
      description: product.description,
    };
    this.db.doc<Product>(`products/${id}`).set(data);
  }
}
