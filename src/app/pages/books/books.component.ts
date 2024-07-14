import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service'; 

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public myBooks: Book[] = [];

  constructor(private booksService: BooksService, private toastr: ToastrService, private userService: UserService) {}

  toastrSuccess() {
    this.toastr.success("Libro eliminado correctamente", "", {
      progressBar: true,
      closeButton: true,
    });
  }

  toastrError() {
    this.toastr.error("No se ha podido eliminar el libro", "Error", {
      progressBar: true,
      closeButton: true,
    })
  }

  // ngOnInit(): void {
  //   this.myBooks = this.booksService.getAll();
  // }

  ngOnInit() {
    const idUser = this.userService.user.id_user;
    this.booksService.getAll(idUser).subscribe((data: Book[]) => {
      this.myBooks = data;
    });
  };

  // eliminarLibro(index: number) {
  //   this.booksService.delete(index);
  // }

  // eliminarLibro(index: number) {
  //   const libro = this.myBooks[index];
  //   this.booksService.delete(libro.id_book).subscribe(() => {
  //     this.myBooks.splice(index, 1);
  //   });
  // };

  eliminarLibro(id_book: number) {
    this.booksService.delete(id_book).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        this.myBooks = this.myBooks.filter(book => book.id_book != id_book);
        console.log(resp);
        this.toastrSuccess();
      } else {
        this.toastrError();
      };
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


  buscarLibro(id_book: number) {
    const idUser = this.userService.user.id_user;
    if (!id_book) {
      this.booksService.getAll(idUser).subscribe((data: Book[]) => {
        this.myBooks = data;
      });
    } else {
      this.booksService.getOne(idUser, id_book).subscribe((resp: Respuesta) => {
        if (!resp.error) {
          console.log(resp);
          this.myBooks = [resp.data];
        } else {
          console.log(resp);
          this.myBooks = [];
        };
      });
    };
  };

};