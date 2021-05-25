import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYfileComponent } from './myfile.component';

describe('MYfileComponent', () => {
  let component: MYfileComponent;
  let fixture: ComponentFixture<MYfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MYfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MYfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
