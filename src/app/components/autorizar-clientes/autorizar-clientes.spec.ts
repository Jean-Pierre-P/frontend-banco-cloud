import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutorizarClientes } from './autorizar-clientes';

describe('AutorizarClientes', () => {
  let component: AutorizarClientes;
  let fixture: ComponentFixture<AutorizarClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorizarClientes],
    }).compileComponents();

    fixture = TestBed.createComponent(AutorizarClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
