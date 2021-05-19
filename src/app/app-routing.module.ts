import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home1',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'orderhistory',
    loadChildren: () => import('./orderhistory/orderhistory.module').then( m => m.OrderhistoryPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'createaccount',
    loadChildren: () => import('./createaccount/createaccount.module').then( m => m.CreateaccountPageModule)
  },
  {
    path: 'mens-wear',
    loadChildren: () => import('./mens-wear/mens-wear.module').then( m => m.MensWearPageModule)
  },
  {
    path: 'productpage',
    loadChildren: () => import('./productpage/productpage.module').then( m => m.ProductpagePageModule)
  },
  {
    path: 'womens-wear',
    loadChildren: () => import('./womens-wear/womens-wear.module').then( m => m.WomensWearPageModule)
  },
  {
    path: 'watches',
    loadChildren: () => import('./watches/watches.module').then( m => m.WatchesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
