import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesApiService } from '../../../shared/api/articles.api.service';
import { Observable } from 'rxjs';
import { NewsItem } from '../../../shared/types/articles';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
})
export class ArticlePageComponent {
  id = 0;
  article$!: Observable<NewsItem>;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private articlesApi: ArticlesApiService,
  ) {
    this.ActivatedRoute.queryParamMap.subscribe((params) => {
      this.id = +(params.get('id') || 0);
    });
    this.article$ = this.articlesApi.getArticle(this.id);
  }
}
