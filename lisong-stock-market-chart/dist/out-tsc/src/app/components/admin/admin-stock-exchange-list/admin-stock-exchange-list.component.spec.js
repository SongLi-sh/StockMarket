import { async, TestBed } from '@angular/core/testing';
import { AdminStockExchangeListComponent } from './admin-stock-exchange-list.component';
describe('AdminStockExchangeListComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminStockExchangeListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AdminStockExchangeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-stock-exchange-list.component.spec.js.map