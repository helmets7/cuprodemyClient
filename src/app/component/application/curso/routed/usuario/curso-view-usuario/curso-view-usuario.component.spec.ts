import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoViewUsuarioComponent } from './curso-view-usuario.component';

describe('CursoViewUsuarioComponent', () => {
  let component: CursoViewUsuarioComponent;
  let fixture: ComponentFixture<CursoViewUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoViewUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoViewUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
