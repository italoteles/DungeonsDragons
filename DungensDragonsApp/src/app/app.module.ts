import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClassesComponent } from './components/classes/classes.component';
import { MonstersComponent } from './components/monsters/monsters.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ClassesComponent,
    MonstersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
