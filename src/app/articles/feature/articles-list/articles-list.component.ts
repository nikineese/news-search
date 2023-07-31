import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SecurityContext,
  SimpleChanges,
} from '@angular/core';
import { ArticlesApiService } from '../../../shared/api/articles.api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  providers: [ArticlesApiService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent implements OnChanges {
  @Input() searchText: string = '';
  articles$ = this.articlesApi.getArticles(this.searchText);

  constructor(
    private articlesApi: ArticlesApiService,
    public sanitizer: DomSanitizer,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.refetchArticles(changes['searchText'].currentValue);
  }

  refetchArticles(s: string) {
    this.articles$ = this.articlesApi.getArticles(s);
  }

  protected readonly SecurityContext = SecurityContext;
}
