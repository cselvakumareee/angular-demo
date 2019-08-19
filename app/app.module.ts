import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ChildrenComponent } from './children/children.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MaterialdemoComponent } from './materialdemo/materialdemo.component';
import { HomeComponent } from './home/home.component';
import { LocaldealsComponent } from './localdeals/localdeals.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { NotificationComponent } from './notification/notification.component';
import { HelpComponent } from './help/help.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    HeroesComponent,
    HeroDetailComponent,
    MaterialdemoComponent,
    HomeComponent,
    LocaldealsComponent,
    WatchlistComponent,
    NotificationComponent,
    HelpComponent,
    HeaderComponent,
    SearchComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
