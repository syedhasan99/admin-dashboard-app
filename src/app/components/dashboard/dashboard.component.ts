import { Component } from '@angular/core';
import { SidebarComponent } from "../dashboard-components/sidebar/sidebar.component";
import { HeaderComponent } from "../dashboard-components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
