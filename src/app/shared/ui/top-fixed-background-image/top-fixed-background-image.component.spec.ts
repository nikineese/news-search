import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFixedBackgroundImageComponent } from './top-fixed-background-image.component';

describe('BackgroundImageComponent', () => {
  let component: TopFixedBackgroundImageComponent;
  let fixture: ComponentFixture<TopFixedBackgroundImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopFixedBackgroundImageComponent],
    });
    fixture = TestBed.createComponent(TopFixedBackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
