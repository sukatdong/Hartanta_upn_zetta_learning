import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasirBigComponent } from './kasir-big.component';

describe('KasirBigComponent', () => {
  let component: KasirBigComponent;
  let fixture: ComponentFixture<KasirBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KasirBigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KasirBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
