import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagememberComponent } from './managemember.component';

describe('ManagememberComponent', () => {
  let component: ManagememberComponent;
  let fixture: ComponentFixture<ManagememberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagememberComponent]
    });
    fixture = TestBed.createComponent(ManagememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
