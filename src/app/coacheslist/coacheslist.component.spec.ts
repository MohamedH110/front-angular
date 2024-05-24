import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheslistComponent } from './coacheslist.component';

describe('CoacheslistComponent', () => {
  let component: CoacheslistComponent;
  let fixture: ComponentFixture<CoacheslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoacheslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoacheslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
