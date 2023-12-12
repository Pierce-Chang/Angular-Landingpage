import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoorderComponent } from './howtoorder.component';

describe('HowtoorderComponent', () => {
  let component: HowtoorderComponent;
  let fixture: ComponentFixture<HowtoorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowtoorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowtoorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
