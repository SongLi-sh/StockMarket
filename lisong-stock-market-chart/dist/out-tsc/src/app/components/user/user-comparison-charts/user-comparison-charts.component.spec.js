import { async, TestBed } from '@angular/core/testing';
import { UserComparisonChartsComponent } from './user-comparison-charts.component';
describe('UserComparisonChartsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserComparisonChartsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UserComparisonChartsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-comparison-charts.component.spec.js.map