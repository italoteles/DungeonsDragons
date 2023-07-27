import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClassesComponent } from './components/classes/classes.component';
import { MonstersComponent } from './components/monsters/monsters.component';
import { FilterMonsterPipe } from './pipes/FilterMonster.pipe';
import { FormsModule } from '@angular/forms';
import { FilterClassPipe } from './pipes/FilterClass.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ClassesComponent,
    MonstersComponent,
    FilterMonsterPipe,
    FilterClassPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
