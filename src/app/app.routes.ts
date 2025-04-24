import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadComponent: () => import('./intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'loading-page',
    loadComponent: () => import('./loading-page/loading-page.page').then( m => m.LoadingPagePage)
  },
  {
    path: 'change-name',
    loadComponent: () => import('./change-name/change-name.page').then( m => m.ChangeNamePage)
  },
  {
    path: 'support',
    loadComponent: () => import('./support/support.page').then( m => m.SupportPage)
  },
];
