import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioDetailAdminUnroutedComponent } from './comentario-detail-admin-unrouted.component';

describe('ComentarioDetailAdminUnroutedComponent', () => {
  let component: ComentarioDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<ComentarioDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
