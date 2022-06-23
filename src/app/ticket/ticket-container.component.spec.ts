import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketContainerComponent } from './ticket-container.component';

describe('TicketContainerComponent', () => {
  let component: TicketContainerComponent;
  let fixture: ComponentFixture<TicketContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
