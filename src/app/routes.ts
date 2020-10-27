import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DetailComponent } from './detail/detail.component';
import { Page404Component } from './error-page/components/page404/page404.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      //significa que toda la ruta tiene que coincider de manera completa
      //de lo contrario lanzaria un error.
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
    },
    {
      path: 'detail/:_id',
      loadChildren: () => import('./detail/detail.module').then(mod => mod.DetailModule)
    },
    {
      path: 'booking/:_id',
      loadChildren: () => import('./booking/booking.module').then(mod => mod.BookingModule)
    },
    {
      path: 'signin',
      loadChildren: () => import('./signin/signin.module').then(mod => mod.SigninModule)
    },
    {
      path: 'signup',
      loadChildren: () => import('./signup/signup.module').then(mod => mod.SignupModule)
    },
    {
      path: '404',
      loadChildren: () => import('./error-page/error-page.module').then(mod => mod.ErrorPageModule)
    },
    {
      path: '**',
      redirectTo: '/404'
    }

  ];