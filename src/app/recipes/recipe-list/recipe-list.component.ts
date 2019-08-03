import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe: RecipeModel[] = [
    new RecipeModel('Burger', 'paneerBurger', 'https://www.google.com/search?rlz=1C1CHBD_enIN858IN859&biw=1522&bih=704&tbm=isch&sa=1&ei=CQ9GXa2fA9iCyAPY6KzABQ&q=vada+pav&oq=vada+pao&gs_l=img.3.0.0i10l10.15764.22065..24504...0.0..0.375.3011.0j12j1j3......0....1..gws-wiz-img.......0i7i30.GTC82A_3oAs#imgrc=R72S4uep3yzs2M:')
  ];
  constructor() { }

  ngOnInit() {
  }

}
