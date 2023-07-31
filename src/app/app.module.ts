import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles/feature/articles-list/articles-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HighlightPipe } from './shared/pipes/highlight.pipe';
import { SearchComponent } from './articles/feature/search/search.component';
import { IconDateComponent } from './articles/ui/icon-date/icon-date.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { OrdinalPipe } from './shared/pipes/ordinal.pipe';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { ArticlesPageComponent } from './articles/feature/articles-page/articles-page.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './shared/ui/icon/icon.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ArticlePageComponent } from './article/feature/article-page/article-page.component';
import { SortArticlesPipe } from './shared/pipes/sortArticles.pipe';
import { LoaderComponent } from './shared/ui/loader/loader.component';
import { TopFixedBackgroundImageComponent } from './shared/ui/top-fixed-background-image/top-fixed-background-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    HighlightPipe,
    SearchComponent,
    IconDateComponent,
    OrdinalPipe,
    TruncatePipe,
    ArticlesPageComponent,
    IconComponent,
    ArticlePageComponent,
    SortArticlesPipe,
    LoaderComponent,
    TopFixedBackgroundImageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    NgOptimizedImage,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
