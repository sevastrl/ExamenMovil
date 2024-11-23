import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service'; 
import { BookService } from '../services/book.service';   

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dogImages: string[] = [];   
  bookTitles: string[] = [];  

  constructor(
    private dogService: DogService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.loadMultipleRandomDogs(10);   
    this.loadMultipleRandomBooks(10); 
  }

   
  loadMultipleRandomDogs(count: number) {
    for (let i = 0; i < count; i++) {
      this.dogService.getRandomDogImage().subscribe(
        (response) => {
          this.dogImages.push(response.message);   
        },
        (error) => {
          console.error('Error al obtener la imagen', error);
        }
      );
    }
  }

   
  loadMultipleRandomBooks(count: number) {
    for (let i = 0; i < count; i++) {
      this.bookService.getRandomBook().subscribe(
        (response) => {
          if (response && response.results && response.results[0]) {
            this.bookTitles.push(response.results[0].title);   
          }
        },
        (error) => {
          console.error('Error al obtener el libro', error);
        }
      );
    }
  }
}
