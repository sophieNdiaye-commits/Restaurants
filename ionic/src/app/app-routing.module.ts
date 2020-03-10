import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'localisation',
    loadChildren: () => import('./localisation/localisation.component').then( m => m.LocalisationComponent)
  },
  {
    path: 'ajouter-restaurant',
    loadChildren: () => import('./restaurants/ajouter-restaurant/ajouter-restaurant.module').then( m => m.AjouterRestaurantPageModule)
  },
  { 
    path: 'modifier-restaurant',
    loadChildren: () => import('./restaurants/modifier-restaurant/modifier-restaurant.module').then( m => m.ModifierRestaurantPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./restaurants/details/details.module').then( m => m.DetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
