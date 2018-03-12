import { Component } from '@angular/core';

const LINKS: any[] = [
  { url: '/home', name: 'HOME', icon: 'home' },
  { url: '/mock', name: 'MOCK', icon: 'info_outline' },
  { url: '/back', name: 'BACK_HTTP', icon: 'swap_vert' },
];
const LINK_PREFIX: string = 'SIDEBAR.';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  public links: any[] = LINKS;
  public linkPrefix: string = LINK_PREFIX;
}
