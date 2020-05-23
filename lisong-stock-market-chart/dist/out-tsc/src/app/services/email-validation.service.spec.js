import { TestBed } from '@angular/core/testing';
import { EmailValidationService } from './email-validation.service';
describe('EmailValidationService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EmailValidationService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=email-validation.service.spec.js.map