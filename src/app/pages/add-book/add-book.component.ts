import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private booksService: BooksService, private toastr: ToastrService) {}

  toastrSuccess() {
    this.toastr.success("Libro agregado correctamente", "", {
      progressBar: true,
      closeButton: true,
    });
  }

  toastrError() {
    this.toastr.error("La referencia introducida ya existe", "Error", {
      progressBar: true,
      closeButton: true,
    })
  }

  nuevoLibro(form: NgForm) {
    const libro = new Book(form.value.codigo, undefined, form.value.titulo, form.value.tipo, form.value.autor, form.value.precio, form.value.foto);

    if (this.booksService.getOne(libro.id_book)) {
      this.toastrError();
    } else {
      this.booksService.add(libro);
      this.toastrSuccess();
    }
    form.reset();
  }
}