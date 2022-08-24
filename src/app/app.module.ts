import { AppHeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TodosModule,
    RecipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
