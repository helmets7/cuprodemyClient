import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewUserComponent } from './user-view-user.component';

describe('UserViewUserComponent', () => {
  let component: UserViewUserComponent;
  let fixture: ComponentFixture<UserViewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
