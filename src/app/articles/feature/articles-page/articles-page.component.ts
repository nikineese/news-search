import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesPageComponent {
  searchText = '';

  valueChanged(v: string) {
    this.searchText = v;
  }
}
