import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  control = new FormControl('', {
    nonNullable: true,
  });
  @Output() valueChanged = this.control.valueChanges.pipe(
    debounceTime(200),
    distinctUntilChanged(),
  );
}
