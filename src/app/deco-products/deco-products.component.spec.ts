import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoProductsComponent } from './deco-products.component';

describe('DecoProductsComponent', () => {
  let component: DecoProductsComponent;
  let fixture: ComponentFixture<DecoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
