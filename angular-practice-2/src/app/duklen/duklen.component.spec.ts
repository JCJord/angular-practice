import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuklenComponent } from './duklen.component';

describe('DuklenComponent', () => {
  let component: DuklenComponent;
  let fixture: ComponentFixture<DuklenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuklenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuklenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
