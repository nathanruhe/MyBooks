import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public myBooks: Book[];

  constructor() {
    this.myBooks = [
      new Book ( undefined, undefined, "El principito", "tapa blanda", "Antoine de Saint.Exupery", 7.95, "https://cdn.kobo.com/book-images/86caf6ab-35d2-4e48-8a0a-d28d4987f7fc/353/569/90/False/el-principito-45.jpg"),

      new Book ( undefined, undefined, "El poder", "tapa blanda", "Pedro Baños", 11.35, "https://m.media-amazon.com/images/I/91eDJrp+KiL._AC_UF894,1000_QL80_.jpg"),

      new Book ( undefined, undefined, "Diario de Ana Frank", "tapa blanda", "Ana Frank", 9.75, "https://m.media-amazon.com/images/I/71dWcI94iPS._AC_UF894,1000_QL80_.jpg"),
    ]
  }

  enviar2(titulo: string, tipo: string, autor: string, precio: number, foto: string, codigo: number) {
    this.myBooks.push(new Book (codigo, undefined, titulo, tipo, autor, precio, foto))
  }
}