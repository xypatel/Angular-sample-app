import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayPipeComponent } from './birthday-pipe.component';

describe('BirthdayPipeComponent', () => {
  let component: BirthdayPipeComponent;
  let fixture: ComponentFixture<BirthdayPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
