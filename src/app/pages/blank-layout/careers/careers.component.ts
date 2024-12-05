import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
interface ITeam {
  id: string;
  src: string;
}
@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
})
export class CareersComponent {
  team: ITeam[] = [
    { id: '1', src: 'assets/images/career/1.jpg' },
    { id: '2', src: 'assets/images/career/2.jpg' },
    { id: '3', src: 'assets/images/career/3.jpg' },
    { id: '4', src: 'assets/images/career/4.jpg' },
    { id: '5', src: 'assets/images/career/5.png' },
    { id: '6', src: 'assets/images/career/6.jpg' },
    { id: '7', src: 'assets/images/career/7.png' },
    { id: '8', src: 'assets/images/career/8.png' },
    { id: '9', src: 'assets/images/career/9.png' },
  ];
  teamOwlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    margin: 15,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 6,
      },
    },
  };
}
