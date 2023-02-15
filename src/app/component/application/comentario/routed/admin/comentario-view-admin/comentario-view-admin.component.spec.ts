import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioViewAdminComponent } from './comentario-view-admin.component';

describe('ComentarioViewAdminComponent', () => {
  let component: ComentarioViewAdminComponent;
  let fixture: ComponentFixture<ComentarioViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
