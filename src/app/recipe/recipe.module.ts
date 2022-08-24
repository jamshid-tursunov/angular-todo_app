import { RecipeDetailsComponent } from './components/recipeDetails/recipe-details.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { RecipeItemComponent } from './components/recipeItem/recipe-item.component';
import { RecipeService } from './services/recipe.services';
import { HighlightDirective } from './directives/highlight.directive';

const routes: Routes = [
  {
    path: 'recipe',
    component: RecipeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    RecipeComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    HighlightDirective,
  ],
  providers: [RecipeService],
})
export class RecipeModule {}
