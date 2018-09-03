import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { SharedModule } from '../../../shared/shared.module';
import { BankCardPipe } from '../bank-card.pipe';
import { CardsService } from './cards.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let cardsService;

  beforeEach(async(() => {
    const CardsServiceStatic = {};
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule, BrowserAnimationsModule],
      declarations: [CardsComponent, BankCardPipe],
      providers: [{ provide: CardsService, useValue: CardsServiceStatic }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cardsService = TestBed.get(CardsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
