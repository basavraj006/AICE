import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component')
        .then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component')
        .then(m => m.AboutComponent)
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./components/courses/courses.component')
        .then(m => m.CoursesComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/register/register.component')
        .then(m => m.RegisterComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component')
        .then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
