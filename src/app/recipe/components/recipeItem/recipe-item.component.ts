import { RecipeInterface } from '../../types/recipe.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {
  @Input('recipe') recipe: RecipeInterface;
}
