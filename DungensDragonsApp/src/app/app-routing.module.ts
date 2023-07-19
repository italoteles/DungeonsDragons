import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './components/classes/classes.component';
import { MonstersComponent } from './components/monsters/monsters.component';

const routes: Routes = [
  { path: '', redirectTo: 'classes', pathMatch: 'full' },
  { path: 'classes', component: ClassesComponent },
  { path: 'monsters', component: MonstersComponent },
  { path: '**', redirectTo: 'classes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
