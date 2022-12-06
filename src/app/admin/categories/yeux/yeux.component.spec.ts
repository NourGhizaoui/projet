import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeuxComponent } from './yeux.component';

describe('YeuxComponent', () => {
  let component: YeuxComponent;
  let fixture: ComponentFixture<YeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
