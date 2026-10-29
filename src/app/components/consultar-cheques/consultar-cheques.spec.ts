import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarCheques } from './consultar-cheques';

describe('ConsultarCheques', () => {
  let component: ConsultarCheques;
  let fixture: ComponentFixture<ConsultarCheques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarCheques],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultarCheques);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
