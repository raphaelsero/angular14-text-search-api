import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSearchDialogComponent } from './text-search-dialog.component';

describe('TextSearchDialogComponent', () => {
  let component: TextSearchDialogComponent;
  let fixture: ComponentFixture<TextSearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSearchDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
