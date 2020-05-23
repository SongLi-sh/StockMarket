import { async, TestBed } from '@angular/core/testing';
import { UserResetPasswordComponent } from './user-reset-password.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('UserResetPasswordComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [UserResetPasswordComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UserResetPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-reset-password.component.spec.js.map