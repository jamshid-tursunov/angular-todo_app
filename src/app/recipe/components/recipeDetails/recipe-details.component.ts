import { RecipeInterface } from '../../types/recipe.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
})
export class RecipeDetailsComponent {
  @Input('selectedRecipe') recipe: RecipeInterface;
}
