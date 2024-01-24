import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowndComponent } from './downd.component';

describe('DowndComponent', () => {
  let component: DowndComponent;
  let fixture: ComponentFixture<DowndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DowndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DowndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
