import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioPlistUsuarioComponent } from './comentario-plist-usuario.component';

describe('ComentarioPlistUsuarioComponent', () => {
  let component: ComentarioPlistUsuarioComponent;
  let fixture: ComponentFixture<ComentarioPlistUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioPlistUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioPlistUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
