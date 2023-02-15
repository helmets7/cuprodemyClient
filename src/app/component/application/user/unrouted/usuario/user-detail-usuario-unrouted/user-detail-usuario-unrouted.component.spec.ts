import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailUsuarioUnroutedComponent } from './user-detail-usuario-unrouted.component';

describe('UserDetailUsuarioUnroutedComponent', () => {
  let component: UserDetailUsuarioUnroutedComponent;
  let fixture: ComponentFixture<UserDetailUsuarioUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailUsuarioUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailUsuarioUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
