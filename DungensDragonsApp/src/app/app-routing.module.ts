import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  { path: '', redirectTo: 'classes', pathMatch: 'full' },
  { path: 'classes', component: ClassesComponent },
  { path: '**', redirectTo: 'classes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
