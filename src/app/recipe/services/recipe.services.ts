import { RecipeInterface } from './../types/recipe.interface';
import { BehaviorSubject, filter, map, Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  private _recipes$ = new BehaviorSubject<RecipeInterface[]>([
    {
      id: Math.random().toString(16),
      title: 'First recipe',
      description: 'no description',
    },
    {
      id: Math.random().toString(16),
      title: 'Second recipe',
      description: 'Hello Jacob cafe',
    },
    {
      id: Math.random().toString(16),
      title: 'Third recipe',
      description: 'non-sense description',
    },
  ]);
  readonly recipes$ = this._recipes$.asObservable();

  selectedRecipe$ = new Subject<RecipeInterface>();

  getRecipes(): Observable<RecipeInterface[]> {
    return this.recipes$;
  }

  setSelectedRecipe(id: string): void {
    const selectedRecipe = this._recipes$
      .getValue()
      .find((recipe) => recipe.id === id);

    if (selectedRecipe) {
      this.selectedRecipe$.next(selectedRecipe);
    }
  }
}
