import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioPlistAdminComponent } from './comentario-plist-admin.component';

describe('ComentarioPlistAdminComponent', () => {
  let component: ComentarioPlistAdminComponent;
  let fixture: ComponentFixture<ComentarioPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
