import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionConversorComponent } from './description-conversor.component';

describe('DescriptionConversorComponent', () => {
  let component: DescriptionConversorComponent;
  let fixture: ComponentFixture<DescriptionConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionConversorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
