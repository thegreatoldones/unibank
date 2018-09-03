import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryService } from './history.service';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let historyService;

  beforeEach(async(() => {
    const historyServiceStatic = {};
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule, BrowserAnimationsModule],
      declarations: [HistoryComponent],
      providers: [{ provide: HistoryService, useValue: historyServiceStatic }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    historyService = TestBed.get(HistoryService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
