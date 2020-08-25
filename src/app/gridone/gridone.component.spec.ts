import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridoneComponent } from './gridone.component';

describe('GridoneComponent', () => {
  let component: GridoneComponent;
  let fixture: ComponentFixture<GridoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
