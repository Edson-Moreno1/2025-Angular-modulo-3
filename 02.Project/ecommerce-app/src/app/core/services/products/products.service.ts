import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError,  } from 'rxjs';
import { Product, ProductResponse } from '../../types/Products';

export type filters = {
  q: string;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'http://localhost:3000/api/products';
  constructor(private httpClient: HttpClient) {}

  getProducts(page: number = 1, limit: number = 10) {
    return this.httpClient
      .get<ProductResponse>(this.baseUrl, { params: { page, limit } })
      .pipe(catchError((error) => throwError(() => new Error(error))));
  }

  searchProducts(searchConfig:filters):Observable<Product[]>{
    

    let filters:filters ={
      q:searchConfig.q
    }
    if (searchConfig.minPrice) {
      filters.minPrice = searchConfig.minPrice;
    }
    if (searchConfig.maxPrice) {
      filters.maxPrice = searchConfig.maxPrice;
    }
    const params = new HttpParams({fromObject: filters});
    return this.httpClient.get<ProductResponse>(`${this.baseUrl}/search`, {params}).pipe(
      map(response=>{
        return response.products;
      })
    )

  }
}
