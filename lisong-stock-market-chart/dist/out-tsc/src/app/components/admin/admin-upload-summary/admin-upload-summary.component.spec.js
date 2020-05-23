import { async, TestBed } from '@angular/core/testing';
import { AdminUploadSummaryComponent } from './admin-upload-summary.component';
describe('AdminUploadSummaryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminUploadSummaryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AdminUploadSummaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-upload-summary.component.spec.js.map