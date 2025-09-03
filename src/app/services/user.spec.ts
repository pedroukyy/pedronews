import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService); // ✅ ahora sí es un servicio inyectable
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
