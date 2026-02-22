import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    // SMARTPHONES (5)
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Apple smartphone',
      price: 500000,
      rating: 4.8,
      image: 'IMAGE_URL',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 1
    },
    // добавь ещё 4 смартфона

    // LAPTOPS (5)
    {
      id: 6,
      name: 'MacBook Air M2',
      description: 'Apple laptop',
      price: 700000,
      rating: 4.9,
      image: 'IMAGE_URL',
      link: 'https://kaspi.kz/',
      likes: 0,
      categoryId: 2
    },
    // добавь ещё 4 ноутбука

    // и так далее (всего 20 товаров)
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}