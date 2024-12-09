// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stoc: number;
  discount: number;
  pathFoto: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://localhost:32769/api/Product'; // trebuie facute mai multe endpoint-uri pentru Product in back-end...

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> { // momentan doar aceasta functie ar trebui sa mearga, pt ca la Product, avem doar acest tip de endpoint
    return this.http.get<Product[]>(this.apiUrl);
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  public deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
