import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
