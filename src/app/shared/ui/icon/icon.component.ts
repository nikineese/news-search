import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconType } from '../../types/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() type!: IconType;
  @Input() size!: number;
  @Input() color: string = '#000';
  @Input() hor_flip: boolean = false;
}
