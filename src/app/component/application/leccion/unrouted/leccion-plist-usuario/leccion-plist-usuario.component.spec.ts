import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionPlistUsuarioComponent } from './leccion-plist-usuario.component';

describe('LeccionPlistUsuarioComponent', () => {
  let component: LeccionPlistUsuarioComponent;
  let fixture: ComponentFixture<LeccionPlistUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeccionPlistUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeccionPlistUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
