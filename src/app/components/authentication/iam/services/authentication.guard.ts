import {CanActivateFn,Router} from "@angular/router";
import {map,take} from "rxjs";
import {AuthenticationServices} from "./authentication.services";
import {inject} from "@angular/core";

export const authenticationGuard: CanActivateFn = () =>{
  const authenticationService = inject(AuthenticationServices);
  const router = inject(Router);
  return authenticationService.isSignedIn.pipe(
    take(1),map(isSignedIn => {
      if (isSignedIn) return true; else{
        router.navigate(['/login']).then();
        return false;
      }
    })
  )
}
