import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookrentalComponent } from './bookrental.component';

describe('BookrentalComponent', () => {
  let component: BookrentalComponent;
  let fixture: ComponentFixture<BookrentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookrentalComponent]
    });
    fixture = TestBed.createComponent(BookrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
