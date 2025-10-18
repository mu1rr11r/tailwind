import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const glow = document.getElementById('glow');
    if (glow) {
      glow.style.transform = `translate(${event.clientX - 128}px, ${event.clientY - 128}px)`;
    }
  }
}
