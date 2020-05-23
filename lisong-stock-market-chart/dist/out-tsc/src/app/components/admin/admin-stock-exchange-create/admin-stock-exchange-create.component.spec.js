import { async, TestBed } from '@angular/core/testing';
import { AdminStockExchangeCreateComponent } from './admin-stock-exchange-create.component';
describe('AdminStockExchangeCreateComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminStockExchangeCreateComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AdminStockExchangeCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-stock-exchange-create.component.spec.js.map