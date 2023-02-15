import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocomentarioFinderComponent } from './tipocomentario-finder.component';

describe('TipocomentarioFinderComponent', () => {
  let component: TipocomentarioFinderComponent;
  let fixture: ComponentFixture<TipocomentarioFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipocomentarioFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipocomentarioFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
