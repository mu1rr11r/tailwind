import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  skills = [
    { name: 'HTML5', icon: 'fa-brands fa-html5 text-orange-500', desc: 'Semantic and accessible structure for modern web apps.' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt text-blue-500', desc: 'Building responsive layouts and modern animations.' },
    { name: 'SASS', icon: 'fa-brands fa-sass text-pink-500', desc: 'Reusable styles and clean architecture for large projects.' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap text-purple-500', desc: 'Fast prototyping and responsive grid systems.' },
    { name: 'TailwindCSS', icon: 'fa-solid fa-wind text-cyan-400', desc: 'Utility-first design for fast and elegant interfaces.' },
    { name: 'JavaScript', icon: 'fa-brands fa-js text-yellow-400', desc: 'Dynamic, interactive, and logical web app behavior.' },
    { name: 'Angular', icon: 'fa-brands fa-angular text-red-600', desc: 'Building scalable, component-based web apps.' },
    { name: 'jQuery', icon: 'fa-brands fa-jsfiddle text-sky-400', desc: 'Simplifying DOM manipulation and creating dynamic UI interactions.' },
    { name: 'API', icon: 'fa-solid fa-plug text-green-400', desc: 'Integrating RESTful APIs to connect frontend and backend.' },
    { name: 'Testing', icon: 'fa-solid fa-vial-circle-check text-purple-400', desc: 'Writing and executing unit tests to ensure app reliability.' },
    { name: 'Git & GitHub', icon: 'fa-brands fa-github text-gray-300', desc: 'Version control and collaboration.' },
    { name: 'DevOps', icon: 'fa-solid fa-gears text-indigo-400', desc: 'CI/CD and workflow automation.' },
    { name: 'AI Tools', icon: 'fa-solid fa-brain text-pink-400', desc: 'Using AI for code generation and smart productivity.' },
    { name: 'Postman', icon: 'fa-solid fa-paper-plane text-orange-400', desc: 'API testing and automation tool for backend integration.' },
    { name: 'npm', icon: 'fa-brands fa-npm text-red-500', desc: 'JavaScript package manager for installing and managing dependencies.' },
  ];

  pageSize = 6;
  pageIndex = 0;

  get totalPages() {
    return Math.ceil(this.skills.length / this.pageSize);
  }

  get paginatedSkills() {
    const start = this.pageIndex * this.pageSize;
    return this.skills.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.pageIndex < this.totalPages - 1) {
      this.pageIndex++;
    }
  }

  prevPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
    }
  }
}
