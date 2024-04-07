import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceActivityComponent } from './place-activity.component';

describe('PlaceActivityComponent', () => {
  let component: PlaceActivityComponent;
  let fixture: ComponentFixture<PlaceActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
