import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioPlistAdminComponent } from './tipousuario-plist-admin.component';

describe('TipousuarioPlistAdminComponent', () => {
  let component: TipousuarioPlistAdminComponent;
  let fixture: ComponentFixture<TipousuarioPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
