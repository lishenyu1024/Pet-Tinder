import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpetsComponent } from './adminpets.component';

describe('AdminpetsComponent', () => {
  let component: AdminpetsComponent;
  let fixture: ComponentFixture<AdminpetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
