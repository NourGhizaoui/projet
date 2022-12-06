import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevresComponent } from './levres.component';

describe('LevresComponent', () => {
  let component: LevresComponent;
  let fixture: ComponentFixture<LevresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
