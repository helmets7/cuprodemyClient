import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorElectionComponent } from './visitor-election.component';

describe('VisitorElectionComponent', () => {
  let component: VisitorElectionComponent;
  let fixture: ComponentFixture<VisitorElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorElectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
