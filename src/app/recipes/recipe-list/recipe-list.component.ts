import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.wild-facts.com/wp-content/uploads/2012/06/Callithrix-Monkey.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.wild-facts.com/wp-content/uploads/2012/06/Callithrix-Monkey.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.wild-facts.com/wp-content/uploads/2012/06/Callithrix-Monkey.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
