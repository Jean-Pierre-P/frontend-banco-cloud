import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmitirCheque } from './emitir-cheque';

describe('EmitirCheque', () => {
  let component: EmitirCheque;
  let fixture: ComponentFixture<EmitirCheque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmitirCheque],
    }).compileComponents();

    fixture = TestBed.createComponent(EmitirCheque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
