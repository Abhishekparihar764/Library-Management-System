import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberplansComponent } from './subscriberplans.component';

describe('SubscriberplansComponent', () => {
  let component: SubscriberplansComponent;
  let fixture: ComponentFixture<SubscriberplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriberplansComponent]
    });
    fixture = TestBed.createComponent(SubscriberplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
