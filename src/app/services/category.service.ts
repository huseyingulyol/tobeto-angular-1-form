import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/icategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl: string = "https://northwind.vercel.app/api/categories";

  constructor(private http: HttpClient) {}

  async getDataFromNorthwind()
  {
      const data = await fetch("https://northwind.vercel.app/api/categories");
      return await data.json() ?? [];
  }

  async getDataFromNorthwindById(id : number) : Promise<ICategory | undefined>
  {
      const data = await fetch(`https://northwind.vercel.app/api/categories/${id}`);

      return await data.json() ?? {};
  }

  updateCategory(category: ICategory): Observable<void> {
    const url = `${this.apiUrl}/${category.id}`;
    return this.http.put<void>(url, category);
  }

  deleteCategory(categoryId : number): Observable<any> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.delete<any>(url);
  }

}
