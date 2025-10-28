import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;
  isDarkMode = false;

  constructor(private router: Router) {
    // إغلاق المينيو عند الانتقال بين الصفحات
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.menuOpen = false;
    });

    // تحميل الوضع من localStorage عند بدء التشغيل
    if (typeof window !== 'undefined' && window.localStorage) {
      this.isDarkMode = localStorage.getItem('theme') === 'dark';
      this.updateTheme();
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768) this.menuOpen = false;
  }

  // ✅ تبديل الوضع الداكن
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }

    this.updateTheme();
  }

  // ✅ تحديث كلاس الـ html
  private updateTheme() {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      if (this.isDarkMode) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  }
}
