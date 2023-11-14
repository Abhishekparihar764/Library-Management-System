import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedbookComponent } from './issuedbook.component';

describe('IssuedbookComponent', () => {
  let component: IssuedbookComponent;
  let fixture: ComponentFixture<IssuedbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssuedbookComponent]
    });
    fixture = TestBed.createComponent(IssuedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
