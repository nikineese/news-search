import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPageComponent } from './articles/feature/articles-page/articles-page.component';
import { ArticlePageComponent } from './article/feature/article-page/article-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  {
    path: 'articles',
    component: ArticlesPageComponent,
  },
  {
    path: 'article',
    component: ArticlePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
