import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = "https://northwind.vercel.app/api/products";

  constructor(private http: HttpClient) {}

  async getDataFromNorthwind()
  {
      const data = await fetch("https://northwind.vercel.app/api/products");
      return await data.json() ?? [];
  }

  async getDataFromNorthwindById(id : number) : Promise<IProduct | undefined>
  {
      const data = await fetch(`https://northwind.vercel.app/api/products/${id}`);

      return await data.json() ?? {};
  }

  updateProduct(product: IProduct): Observable<void> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<void>(url, product);
  }

  deleteProduct(productId : number): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<any>(url);
  }

}
