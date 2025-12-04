import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- IMPORTAR
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // <-- Muy importante
  imports: [CommonModule, RouterModule], // <-- Aquí se agrega RouterModule
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}

