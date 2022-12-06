import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeintComponent } from './teint.component';

describe('TeintComponent', () => {
  let component: TeintComponent;
  let fixture: ComponentFixture<TeintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
