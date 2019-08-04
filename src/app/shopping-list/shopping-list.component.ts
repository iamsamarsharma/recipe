import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient: IngredientModel[] = [
    new IngredientModel('Potato Large', 6),
    new IngredientModel('Tomato', 2)
  ];

  constructor() { }

  ngOnInit() {
  }

}
