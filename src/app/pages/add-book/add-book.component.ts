import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private booksService: BooksService) {}

  nuevoLibro(titulo: string, tipo: string, autor: string, precio: number, foto: string, codigo: number) {
    this.booksService.add(new Book (codigo, undefined, titulo, tipo, autor, precio, foto))
  }
}


