import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './top-fixed-background-image.component.html',
  styleUrls: ['./top-fixed-background-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopFixedBackgroundImageComponent {
  @Input() imageUrl: string = '';

  constructor() {}
}
