import { TransferBackComponent } from './transfer-back.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: TransferBackComponent,
    data: {
      meta: {
        title: 'BACK_HTTP.TITLE',
        description: 'BACK_HTTP.DESC'
      }
    },
  },
];

export const TransferBackRoutes = RouterModule.forChild(routes);
