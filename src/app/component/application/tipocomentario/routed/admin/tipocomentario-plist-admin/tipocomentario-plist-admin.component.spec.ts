import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocomentarioPlistAdminComponent } from './tipocomentario-plist-admin.component';

describe('TipocomentarioPlistAdminComponent', () => {
  let component: TipocomentarioPlistAdminComponent;
  let fixture: ComponentFixture<TipocomentarioPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipocomentarioPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipocomentarioPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
