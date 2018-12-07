import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsageComponent } from './book-usage.component';

describe('BookUsageComponent', () => {
  let component: BookUsageComponent;
  let fixture: ComponentFixture<BookUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
