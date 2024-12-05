import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Category {
  id: string;
  name: string;
}
export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
}
export interface FilterGroup {
  id: string;
  name: string;
  subcategoryId: string;
}
export interface FilterValue {
  id: string;
  name: string;
  filterGroupId: string;
}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://localhost:32769/api';

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/Category/get-all`);
  }

  public getSubcategories(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${this.apiUrl}/Subcategory/get-all`);
  }

  public getFilterGroups(): Observable<FilterGroup[]> {
    return this.http.get<FilterGroup[]>(`${this.apiUrl}/FilterGroup/get-all`);
  }

  public getFilterValues(): Observable<FilterValue[]> {
    return this.http.get<FilterValue[]>(`${this.apiUrl}/FilterValue/get-all`);
  }
}
