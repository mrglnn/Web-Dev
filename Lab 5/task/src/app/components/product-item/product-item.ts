import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  remove() {
    this.delete.emit(this.product.id);
  }
}