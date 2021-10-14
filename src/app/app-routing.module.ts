import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'controllers',
    loadChildren: () => import('./controllers/controllers.module').then( m => m.ControllersPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'templates',
    loadChildren: () => import('./templates/templates.module').then( m => m.TemplatesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}
//define as rotas do app
/*
Angular.module('calculoImcApp')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    //quando for a pagina de cálculo
    .state('calculo', {
      url: '/',
      templateUrl: 'templates/calculo.html',
      controller: 'calculoController'
    })
    //quando for a pagina do resultado
    .state('resultado', {
      url: '/resultado',
      templateUrl: 'templates/resultado.html'
    })
    $urlRouterProvider.otherwise('/')
});

*/