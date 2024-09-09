import { CanActivateFn } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  return inject(UserAuthService).isUserLogged;
};
