import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatememberComponent } from './updatemember.component';

describe('UpdatememberComponent', () => {
  let component: UpdatememberComponent;
  let fixture: ComponentFixture<UpdatememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatememberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
