import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public myBooks: Book[];
  
  constructor(private booksService: BooksService) {}

  editarLibro(titulo: string, tipo: string, autor: string, precio: number, foto: string, codigo: number) {
    this.booksService.edit(new Book (codigo, undefined, titulo, tipo, autor, precio, foto))
  }

}