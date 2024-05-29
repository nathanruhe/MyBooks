import { Component, OnInit } from '@angular/core';
import { zipAll } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public myBooks: Book[];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.myBooks = this.booksService.getAll();
  }

  eliminarLibro(index: number) {
    this.booksService.delete(index);
  }

  buscarLibro(index: number): void {
    if (index == 0) {
      this.myBooks = this.booksService.getAll()
    } else if (index != 0) {
      let encuentra = this.booksService.getOne(index);
        if (encuentra) {
        this.myBooks = [encuentra];
      } else {
        this.myBooks = [];
      }
    }
  }
}