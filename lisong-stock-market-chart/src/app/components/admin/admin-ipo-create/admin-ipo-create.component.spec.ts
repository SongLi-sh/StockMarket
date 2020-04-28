import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIpoCreateComponent } from './admin-ipo-create.component';

describe('AdminIpoCreateComponent', () => {
  let component: AdminIpoCreateComponent;
  let fixture: ComponentFixture<AdminIpoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIpoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIpoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
