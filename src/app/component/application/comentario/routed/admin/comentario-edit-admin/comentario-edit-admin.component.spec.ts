import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioEditAdminComponent } from './comentario-edit-admin.component';

describe('ComentarioEditAdminComponent', () => {
  let component: ComentarioEditAdminComponent;
  let fixture: ComponentFixture<ComentarioEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
