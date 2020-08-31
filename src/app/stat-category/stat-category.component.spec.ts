import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCategoryComponent } from './stat-category.component';

describe('StatCategoryComponent', () => {
  let component: StatCategoryComponent;
  let fixture: ComponentFixture<StatCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
