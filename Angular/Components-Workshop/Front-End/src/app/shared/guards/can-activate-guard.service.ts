import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { MockAuthService } from "src/app/services/mock-auth.service";


export function CanActivateGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const router = inject(Router);
    const mockData = inject(MockAuthService);

    if (!mockData.isUser) {
        router.navigate(['/login']);
    }

    return mockData.isUser;
}


