import { RecipeInterface } from './types/recipe.interface';
import { Observable, Subscription } from 'rxjs';
import { RecipeService } from './services/recipe.services';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit, OnDestroy {
  allRecipes$: Observable<RecipeInterface[]>;
  selectedRecipe: RecipeInterface;
  selectedRecipe$: Subscription;

  constructor(private recipeService: RecipeService) {}

  selectRecipe(recipeId: string): void {
    this.recipeService.setSelectedRecipe(recipeId);
  }

  ngOnInit(): void {
    this.allRecipes$ = this.recipeService.getRecipes();
    this.selectedRecipe$ = this.recipeService.selectedRecipe$.subscribe(
      (x) => (this.selectedRecipe = x)
    );
  }

  ngOnDestroy(): void {
    this.selectedRecipe$.unsubscribe();
  }
}
