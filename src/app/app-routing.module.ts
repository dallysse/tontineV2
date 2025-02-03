import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },

  {
    path: 'aides',
    loadChildren: () => import('./aides/aides.module').then( m => m.AidesPageModule)
  },
  {
    path: 'membres',
    loadChildren: () => import('./membres/membres.module').then( m => m.MembresPageModule)
  },
  {
    path: 'pret',
    loadChildren: () => import('./pret/pret.module').then( m => m.PretPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'depenses',
    loadChildren: () => import('./depenses/depenses.module').then( m => m.DepensesPageModule)
  },
  {
    path: 'details-assise/:id',
    loadChildren: () => import('./details-assise/details-assise.module').then( m => m.DetailsAssisePageModule)
  },
  {
    path: 'details-membre/:id',
    loadChildren: () => import('./details-membre/details-membre.module').then((m) => m.DetailsMembrePageModule),
  },
  {
    path: 'caisse',
    loadChildren: () => import('./caisse/caisse.module').then( m => m.CaissePageModule)
  },
  {
    path: 'sanctions',
    loadChildren: () => import('./sanctions/sanctions.module').then( m => m.SanctionsPageModule)
  },
  {
    path: 'projets',
    loadChildren: () => import('./projets/projets.module').then( m => m.ProjetsPageModule)
  },
  {
    path: 'regles',
    loadChildren: () => import('./regles/regles.module').then( m => m.ReglesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
