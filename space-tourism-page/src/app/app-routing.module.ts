import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import CrewComponent from './pages/crew/crew.component';
import DestinationComponent from './pages/destination/destination.component';
import HomeComponent from './pages/home/home.component';
import TechnologyComponent from './pages/technology/technology.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'technology', component: TechnologyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
