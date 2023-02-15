import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocomentarioDetailAdminUnroutedComponent } from './tipocomentario-detail-admin-unrouted.component';

describe('TipocomentarioDetailAdminUnroutedComponent', () => {
  let component: TipocomentarioDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<TipocomentarioDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipocomentarioDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipocomentarioDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
