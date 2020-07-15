import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ServerResponse, ProductModelServer } from '../../models/product.model';

/*
 It is used for product view filter catagories
  */

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  products: ProductModelServer[] = [];
  constructor( private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: ServerResponse) => {
      this.products = prods.products;
    });
  }
  selectProduct(id: number) {
    this.router.navigate(['/product', id]).then();
  }
}
