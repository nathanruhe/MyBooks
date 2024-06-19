import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public myBooks: Book[] = [];

  constructor(private booksService: BooksService) {}

  // ngOnInit(): void {
  //   this.myBooks = this.booksService.getAll();
  // }

  ngOnInit() {
    this.booksService.getAll().subscribe((data: Book[]) => {
      this.myBooks = data;
    })
  }

  // eliminarLibro(index: number) {
  //   this.booksService.delete(index);
  // }

  eliminarLibro(index: number) {
    const libro = this.myBooks[index];
    this.booksService.delete(libro.id_book).subscribe(() => {
      this.myBooks.splice(index, 1);
    });
  };

  // buscarLibro(index: number): void {
    // if (index == 0) {
    //   this.myBooks = this.booksService.getAll()
    // } else if (index != 0) {
    //   let encuentra = this.booksService.getOne(index);
    //     if (encuentra) {
    //     this.myBooks = [encuentra];
    //   } else {
    //     this.myBooks = [];
    //   }
    // }
  // }

  buscarLibro(index: number) {
    if (!index) {
        this.booksService.getAll().subscribe((data: Book[]) => {
          this.myBooks = data;
        });
    } else if (index) {
      this.booksService.getAll().subscribe((books: Book[]) => {
        let encuentra = books.find(book => book.id_book == index);
        if (encuentra) {
        this.myBooks = [encuentra];
      } else {
        this.myBooks = [];
      };
      });
    }; 
  };


};