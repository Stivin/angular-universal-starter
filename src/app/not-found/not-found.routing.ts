import { NotFoundComponent } from './not-found.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: NotFoundComponent,
    data: {
      meta: {
        title: 'NOT_FOUND.TITLE',
        description: 'NOT_FOUND.DESC'
      }
    },
  },
];

export const NotFoundRoutes = RouterModule.forChild(routes);
