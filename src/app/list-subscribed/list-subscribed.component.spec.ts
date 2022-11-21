import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubscribedComponent } from './list-subscribed.component';

describe('ListSubscribedComponent', () => {
  let component: ListSubscribedComponent;
  let fixture: ComponentFixture<ListSubscribedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubscribedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSubscribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
