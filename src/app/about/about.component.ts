import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  foodItems: any;

  constructor( private eat: FoodService) { 
     this.foodItems = eat.foods;
  }

  ngOnInit() {
  }

}
