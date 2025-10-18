import { Component, inject, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TailwindService } from './core/service/tailwind.service';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly TailwindService=inject(TailwindService)
   ngOnInit(): void {
    this.TailwindService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
