import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleConversorComponent } from './title-conversor.component';

describe('TitleConversorComponent', () => {
  let component: TitleConversorComponent;
  let fixture: ComponentFixture<TitleConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleConversorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
