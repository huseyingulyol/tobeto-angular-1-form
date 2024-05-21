import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productService = inject(ProductService);

  ProductList : ProductElement[] = []; 

  removeProduct(productId: number)
  {
    console.log(productId);
    this.productService.deleteProduct(productId).subscribe(()=>
      {
        this.ngOnInit();
      }
    );
  }

  ngOnInit() {   
  this.productService.getDataFromNorthwind().then((data) => { 
    this.ProductList = data;
    console.log(this.ProductList);
  });
}
}

export interface ProductElement {
  id: number;
  categoryId: string;
  unitPrice: string;
  unitsInStock: string;
  reorderLevel: string;
  discontinued: string;
  name: string;
}

// <td>{{product.id}}</td>
// <td>{{product.categoryId}}</td>
// <td>{{product.unitPrice}}</td>
// <td>{{product.unitsInStock}}</td>
// <td>{{product.reorderLevel}}</td>
// <td>{{product.discontinued}}</td>
// <td>{{product.name}}</td>