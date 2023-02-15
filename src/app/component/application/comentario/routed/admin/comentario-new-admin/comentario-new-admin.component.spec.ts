import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioNewAdminComponent } from './comentario-new-admin.component';

describe('ComentarioNewAdminComponent', () => {
  let component: ComentarioNewAdminComponent;
  let fixture: ComponentFixture<ComentarioNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
