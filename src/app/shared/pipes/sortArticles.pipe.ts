import { Pipe, PipeTransform } from '@angular/core';
import { NewsItem } from '../types/articles';

@Pipe({
  name: 'sortArticles',
})
export class SortArticlesPipe implements PipeTransform {
  transform(
    articles: NewsItem[] | null,
    searchText: string,
  ): NewsItem[] | null {
    if (!articles) return null;
    return articles.sort(
      (a, b) =>
        this.numerizeCheck(b, searchText) - this.numerizeCheck(a, searchText),
    );
  }
  checkWords(searchText: string, fn: (w: string) => boolean) {
    const words = searchText.split(' ');
    return words.some(fn);
  }
  numerizeCheck(a: NewsItem, searchText: string) {
    return Number(
      this.checkWords(searchText.toLowerCase(), (w) =>
        a.title.toLowerCase().includes(w),
      ),
    );
  }
}
