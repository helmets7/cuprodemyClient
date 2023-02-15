import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioRemoveAdminComponent } from './comentario-remove-admin.component';

describe('ComentarioRemoveAdminComponent', () => {
  let component: ComentarioRemoveAdminComponent;
  let fixture: ComponentFixture<ComentarioRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
