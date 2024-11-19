import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatExpansionModule, RouterLink, MatIconModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  activeMenu: string = 'overview';
}
