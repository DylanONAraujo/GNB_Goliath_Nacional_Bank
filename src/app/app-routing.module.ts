import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () =>
      import('./views/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./views/pages/forgot-password/forgot-password.module')
        .then(m => m.ForgotPasswordModule)
  },
  {
    path: 'custom-layout',
    loadChildren: () =>
      import('./views/custom-layout/custom-layout.module')
        .then(m => m.CustomLayoutModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
