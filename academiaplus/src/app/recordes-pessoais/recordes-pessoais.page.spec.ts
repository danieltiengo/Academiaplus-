import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordesPessoaisPage } from './recordes-pessoais.page';

describe('RecordesPessoaisPage', () => {
  let component: RecordesPessoaisPage;
  let fixture: ComponentFixture<RecordesPessoaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordesPessoaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordesPessoaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
