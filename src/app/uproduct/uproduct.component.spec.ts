import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UproductComponent } from './uproduct.component';

describe('UproductComponent', () => {
  let component: UproductComponent;
  let fixture: ComponentFixture<UproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
