import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

//   public myBooks: Book[] = [
//     new Book ( 1, undefined, "El principito", "tapa blanda", "Antoine de Saint.Exupery", 7.95, "https://cdn.kobo.com/book-images/86caf6ab-35d2-4e48-8a0a-d28d4987f7fc/353/569/90/False/el-principito-45.jpg"),

//     new Book ( 2, undefined, "El poder", "tapa blanda", "Pedro Baños", 11.35, "https://m.media-amazon.com/images/I/91eDJrp+KiL._AC_UF894,1000_QL80_.jpg"),

//     new Book ( 3, undefined, "Diario de Ana Frank", "tapa blanda", "Ana Frank", 9.75, "https://m.media-amazon.com/images/I/71dWcI94iPS._AC_UF894,1000_QL80_.jpg"),
// ]

  public myBooks: Book[]

  private url = "http://localhost:3000/books";

  constructor(private http: HttpClient) {}

  // public getAll(): Book[] {
  //   return this.myBooks;
  // }

  public getAll() {
    return this.http.get(this.url);
  };

  // public getOne(id_book: number): Book {
  //   return this.myBooks.find(libro => libro.id_book === id_book);
  // }

  public getOne(id_book: number) {
    return this.http.get(this.url + "/" + id_book);
  };

  // public add(book: Book): void {
  //   this.myBooks.push(book);
  //   console.log(this.myBooks);
  // }

  public add(book: Book) {
    return this.http.post(this.url, book);
  };

  // public edit(book: Book): boolean {
  //   const index = this.myBooks.findIndex(libro => libro.id_book === book.id_book);
  //   if (index !== -1) {
  //     this.myBooks[index] = book;
  //     return true;
  //   }
  //   return false;
  // }

  public edit(book: Book) {
    return this.http.put(this.url, book);
  };

  // public delete(index): void {
  //   this.myBooks.splice(index, 1);
  // }

  // public delete(id_book) {
  //   return this.http.delete(this.url, id_book);
  // }

  public delete(id_book: number) {
    return this.http.delete(this.url, {body:{id_book}});
  };
}
