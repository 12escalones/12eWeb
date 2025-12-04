import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Apoyo } from './pages/cursos/apoyo/apoyo';
import { Idiomas } from './pages/cursos/idiomas/idiomas';
import { Psicologia } from './pages/cursos/psicologia/psicologia';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'cursos/apoyo', component: Apoyo },
  { path: 'cursos/idiomas', component: Idiomas },
  { path: 'cursos/psicologia', component: Psicologia },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];

