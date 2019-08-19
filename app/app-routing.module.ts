import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocaldealsComponent } from './localdeals/localdeals.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { NotificationComponent } from './notification/notification.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'localdeals', component: LocaldealsComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'help', component: HelpComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

