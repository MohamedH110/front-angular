import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurclassesComponent } from './ourclasses.component';

describe('OurclassesComponent', () => {
  let component: OurclassesComponent;
  let fixture: ComponentFixture<OurclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurclassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
