import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'users-app';

  items: MenuItem[] = [];

  ngOnInit(){
   this.items = [
    {
      label: "View Users",
      icon: PrimeIcons.USERS,
    },
    {
      label: "Add User",
      icon: PrimeIcons.USERS,
    },
   ]
  }
}
