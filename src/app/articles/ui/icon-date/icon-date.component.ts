import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-date',
  templateUrl: './icon-date.component.html',
  styleUrls: ['./icon-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDateComponent {
  @Input() date: string = '';
}
