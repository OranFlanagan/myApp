import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'clubnotes',
    loadComponent: () => import('./clubnotes/clubnotes.page').then( m => m.ClubnotesPage)
  },
  {
    path: 'intro',
    loadComponent: () => import('./intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'fundrasier',
    loadComponent: () => import('./fundrasier/fundrasier.page').then( m => m.FundrasierPage)
  },
];
