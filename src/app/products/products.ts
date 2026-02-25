import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [
    {
      name: 'Classic White T-Shirt',
      price: 499,
      image: 'images.jpg',
      description: 'Soft cotton everyday shirt.',
      stock: 10
    },
    
    {
      name: 'Black Oversized Tee',
      price: 599,
      image: 'ai-generated-plain-black-t-shirt-mockup-design-front-and-back-on-transparent-background-file-png.png',
      description: 'Trendy oversized fit.',
      stock: 8
    },
    // add remaining items...
  ];

  addToCart(product: Product) {
    if (product.stock <= 0) return;

    product.stock--;

    if (!(product as any).quantity) {
      (product as any).quantity = 1;
    } else {
      (product as any).quantity++;
    }
  }
}
