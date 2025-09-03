import { TestBed } from '@angular/core/testing';
import { NewsService } from './news.service';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsService); // ✅ ahora sí es un servicio inyectable
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
