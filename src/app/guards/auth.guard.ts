import { Router } from '@angular/router';

export const AuthGuard = (router: Router) => {
  router = new Router();
  const trueORFalse = [true, false];
  console.log('Hello from guard');
  const random = Math.floor(Math.random() * trueORFalse.length);

  const randomise = trueORFalse[random];

  if (!randomise) {
    alert(`Access denied`);
    setTimeout(() => {
      router.navigate(['/']);
    }, 1000);
  }

  console.log(randomise);

  return true;
};
