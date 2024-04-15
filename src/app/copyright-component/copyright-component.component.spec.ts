import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightComponentComponent } from './copyright-component.component';

describe('CopyrightComponentComponent', () => {
  let component: CopyrightComponentComponent;
  let fixture: ComponentFixture<CopyrightComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyrightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
