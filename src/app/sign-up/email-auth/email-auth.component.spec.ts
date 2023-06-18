import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAuthComponent } from './email-auth.component';

describe('EmailAuthComponent', () => {
  let component: EmailAuthComponent;
  let fixture: ComponentFixture<EmailAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailAuthComponent]
    });
    fixture = TestBed.createComponent(EmailAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
