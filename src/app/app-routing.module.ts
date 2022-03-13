import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstRiddleComponent } from './first-riddle/first-riddle.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: 'start', component: StartComponent, pathMatch: 'full'},
  {path: 'first-riddle',  component: FirstRiddleComponent},  
  {path: '', pathMatch: 'full', redirectTo: 'start'},
  {path: '**', redirectTo: 'posts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
