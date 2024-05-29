import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public myBooks: Book[] = [
    new Book ( 1, undefined, "El principito", "tapa blanda", "Antoine de Saint.Exupery", 7.95, "https://cdn.kobo.com/book-images/86caf6ab-35d2-4e48-8a0a-d28d4987f7fc/353/569/90/False/el-principito-45.jpg"),

    new Book ( 2, undefined, "El poder", "tapa blanda", "Pedro Baños", 11.35, "https://m.media-amazon.com/images/I/91eDJrp+KiL._AC_UF894,1000_QL80_.jpg"),

    new Book ( 3, undefined, "Diario de Ana Frank", "tapa blanda", "Ana Frank", 9.75, "https://m.media-amazon.com/images/I/71dWcI94iPS._AC_UF894,1000_QL80_.jpg"),
]

  constructor() {}

  public getAll(): Book[] {
    return this.myBooks;
  }

  public getOne(id_book: number): Book {
    return this.myBooks.find(libro => libro.id_book === id_book);
  }

  public add(book: Book): void {
    this.myBooks.push(book);
    console.log(this.myBooks);
    
  }

  public edit(book: Book): boolean {
    const index = this.myBooks.findIndex(libro => libro.id_book === book.id_book);
    if (index !== -1) {
      this.myBooks[index] = book;
      return true;
    }
    return false;
  }

  public delete(index): void {
    this.myBooks.splice(index, 1);
  }
}
