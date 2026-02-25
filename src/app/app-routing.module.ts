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
    loadChildren: () => import('./pages/aides/aides.module').then(m => m.AidesPageModule)
  },
  {
    path: 'membres',
    loadChildren: () => import('./pages/membres/membres.module').then(m => m.MembresPageModule)
  },
  {
    path: 'pret',
    loadChildren: () => import('./pages/pret/pret.module').then(m => m.PretPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then(m => m.AccueilPageModule)
  },
  {
    path: 'depenses',
    loadChildren: () => import('./pages/depenses/depenses.module').then(m => m.DepensesPageModule)
  },
  {
    path: 'details-assise/:id',
    loadChildren: () => import('./pages/details-assise/details-assise.module').then(m => m.DetailsAssisePageModule)
  },
  {
    path: 'details-membre/:id',
    loadChildren: () => import('./pages/details-membre/details-membre.module').then((m) => m.DetailsMembrePageModule),
  },
  {
    path: 'caisse',
    loadChildren: () => import('./pages/caisse/caisse.module').then(m => m.CaissePageModule)
  },
  {
    path: 'sanctions',
    loadChildren: () => import('./pages/sanctions/sanctions.module').then(m => m.SanctionsPageModule)
  },
  {
    path: 'projets',
    loadChildren: () => import('./pages/projets/projets.module').then(m => m.ProjetsPageModule)
  },
  {
    path: 'regles',
    loadChildren: () => import('./pages/regles/regles.module').then(m => m.ReglesPageModule)
  },
  {
    path: 'detail-session/:id',
    loadChildren: () => import('./pages/detail-session/detail-session.module').then(m => m.DetailSessionPageModule)
  },
  {
    path: 'cotisations',
    loadChildren: () => import('./pages/cotisations/cotisations.module').then(m => m.CotisationsPageModule)
  },
  {
    path: 'parametre',
    loadChildren: () => import('./pages/parametre/parametre.module').then(m => m.ParametrePageModule)
  },
  {
    path: 'gestion-reunion',
    loadChildren: () => import('./pages/gestion-reunion/gestion-reunion.module').then(m => m.GestionReunionPageModule)
  },
  {
    path: 'collation',
    loadChildren: () => import('./pages/collation/collation.module').then(m => m.CollationPageModule)
  },
  {
    path: 'activites',
    loadChildren: () => import('./pages/activites/activites.module').then(m => m.ActivitesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
