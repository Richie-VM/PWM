import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProgramaComponent } from './components/programa/programa.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'programa', component: ProgramaComponent},
];
