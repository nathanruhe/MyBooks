import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() bookPadre: Book;
  @Output() eliminar = new EventEmitter<number>();
  @Input() index: number;

  even: boolean;

  constructor() {}

  ngOnInit(): void {
    this.even = this.index % 2 === 0;
  }

  eliminarCard() {
    this.eliminar.emit(this.bookPadre.id_book);
  }
}
