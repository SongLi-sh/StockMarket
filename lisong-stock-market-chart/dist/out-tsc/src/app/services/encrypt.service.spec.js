import { TestBed } from '@angular/core/testing';
import { EncryptService } from './encrypt.service';
describe('EncryptService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EncryptService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=encrypt.service.spec.js.map