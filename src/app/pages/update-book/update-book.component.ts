import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  constructor(private booksService: BooksService, private toastr: ToastrService) {}

  toastrSuccess() {
    this.toastr.success("Libro editado correctamente", "", {
      progressBar: true,
      closeButton: true,
    });
  }

  toastrError() {
    this.toastr.error("La referencia introducida no existe", "Error", {
      progressBar: true,
      closeButton: true,
    })
  }

  editarLibro(form: NgForm) {
    const libro = new Book(form.value.codigo, undefined, form.value.titulo, form.value.tipo, form.value.autor, form.value.precio, form.value.foto);

    if (this.booksService.getOne(libro.id_book)) {
      this.booksService.edit(libro);
      this.toastrSuccess();
    } else {
      this.toastrError();
    }
    form.reset();
  }
}