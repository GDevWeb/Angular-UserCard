import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, take } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

export const UserDetailGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const router = inject(Router);

  const userId = Number(route.params['userId']);

  return userService.getUsers().pipe(
    take(1),
    map((users) => {
      const user = users.find((u) => u.id === userId);
      if (!user) {
        router.navigate(['/not-found']);
        return false;
      }
      return true;
    })
  );
};
