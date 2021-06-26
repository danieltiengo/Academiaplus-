import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichaDeTreinoPage } from './ficha-de-treino.page';

describe('FichaDeTreinoPage', () => {
  let component: FichaDeTreinoPage;
  let fixture: ComponentFixture<FichaDeTreinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaDeTreinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichaDeTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
