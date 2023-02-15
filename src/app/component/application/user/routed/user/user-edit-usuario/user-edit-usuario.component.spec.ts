import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditUsuarioComponent } from './user-edit-usuario.component';

describe('UserEditUsuarioComponent', () => {
  let component: UserEditUsuarioComponent;
  let fixture: ComponentFixture<UserEditUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
