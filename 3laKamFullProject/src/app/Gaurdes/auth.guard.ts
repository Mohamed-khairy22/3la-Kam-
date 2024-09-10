import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  if (inject(UserAuthService).isUserLogged == true)
    return true;
  else {
    alert("please login first");
    inject(Router).navigate(["login"]);
    return false
  }
};
