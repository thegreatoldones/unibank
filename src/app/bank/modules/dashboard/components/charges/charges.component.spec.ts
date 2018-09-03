import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesComponent } from './charges.component';
import { SharedModule } from '../../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChargesService } from './charges.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChargesComponent', () => {
  let component: ChargesComponent;
  let fixture: ComponentFixture<ChargesComponent>;
  let chargesService;

  beforeEach(async(() => {
    const ChargesServiceStatic = {};
    TestBed.configureTestingModule({
      imports: [SharedModule, NgxEchartsModule, HttpClientTestingModule, BrowserAnimationsModule],
      declarations: [ChargesComponent],
      providers: [{ provide: ChargesService, useValue: ChargesServiceStatic }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    chargesService = TestBed.get(ChargesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
