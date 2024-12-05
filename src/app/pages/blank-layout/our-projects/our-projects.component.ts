import { Component } from '@angular/core';

interface IProjects {
  id: number;
  alt: string;
  src: string;
}

@Component({
  selector: 'app-our-projects',
  standalone: true,
  imports: [],
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.scss',
})
export class OurProjectsComponent {
  projects: IProjects[] = [
    { id: 0, alt: '', src: 'assets/images/our_projects/2.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/1.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/3.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/4.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/6.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/5.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/7.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/9.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/10.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/11.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/12.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/8.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/14.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/13.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/15.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/16.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/18.jpg' },
    { id: 0, alt: '', src: 'assets/images/our_projects/17.jpg' },
  ];
}
