import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  categories: Category[] = [];
  products: Product[] = [];
  selectedCategory: Category | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.products = this.productService.getProductsByCategory(category.id);
  }
}