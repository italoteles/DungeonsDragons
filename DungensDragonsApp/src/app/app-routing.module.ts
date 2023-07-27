import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './components/classes/classes.component';
import { MonstersComponent } from './components/monsters/monsters.component';
import { RacesComponent } from './components/races/races.component';

const routes: Routes = [
  { path: '', redirectTo: 'classes', pathMatch: 'full' },
  { path: 'classes', component: ClassesComponent },
  { path: 'monsters', component: MonstersComponent },
  { path: 'races', component: RacesComponent },
  { path: '**', redirectTo: 'classes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
