import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoAboutComponent } from './deco-about.component';

describe('DecoAboutComponent', () => {
  let component: DecoAboutComponent;
  let fixture: ComponentFixture<DecoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
