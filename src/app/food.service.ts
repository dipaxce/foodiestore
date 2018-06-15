import { Injectable } from '@angular/core';
@Injectable()

export class FoodService{
    foods = [
      { Image: '../assets/pasta.jpg',name: 'Pasta'},
      { Image: '../assets/pizza.png', name: 'Pizza' },
      { Image: '../assets/momo.jpeg', name: 'Momo' },
      { Image: '../assets/spaghetti.jpeg', name: 'Spaghetti' },
      { Image: '../assets/burger.jpg', name: 'Burger' },
      { Image: '../assets/sandwich.jpg', name: 'Sandwich' },
      { Image: '../assets/combo.jpg', name: 'Food Combo' },
      { Image: '../assets/kattirolls.JPG', name: 'Katti Rolls' },
      { Image: '../assets/sekuwa.jpg', name: 'Sekuwa' },
      { Image: '../assets/coffee.jpg', name: 'Hot Beverages' },
      { Image: '../assets/mojito.jpg', name: 'Cold Drinks' },
      { Image: '../assets/drinks.png', name: 'Hard Drinks' }
    ];
  }



