import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

interface ISlideStore {
  id: string;
  alt: string;
  src: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  firstSlidesStore: ISlideStore[] = [
    {
      id: '1',
      alt: 'digital bound our_clients1',
      src: 'assets/images/our_clients/1.png',
    },
    {
      id: '2',
      alt: 'digital bound our_clients2',
      src: 'assets/images/our_clients/2.png',
    },
    {
      id: '3',
      alt: 'digital bound our_clients3',
      src: 'assets/images/our_clients/3.png',
    },
    {
      id: '4',
      alt: 'digital bound our_clients4',
      src: 'assets/images/our_clients/4.png',
    },
    {
      id: '5',
      alt: 'digital bound our_clients5',
      src: 'assets/images/our_clients/5.png',
    },
    {
      id: '6',
      alt: 'digital bound our_clients6',
      src: 'assets/images/our_clients/6.png',
    },
    {
      id: '7',
      alt: 'digital bound our_clients7',
      src: 'assets/images/our_clients/7.png',
    },
    {
      id: '8',
      alt: 'digital bound our_clients8',
      src: 'assets/images/our_clients/8.png',
    },
    {
      id: '9',
      alt: 'digital bound our_clients9',
      src: 'assets/images/our_clients/9.png',
    },
    {
      id: '10',
      alt: 'digital bound our_clients10',
      src: 'assets/images/our_clients/10.png',
    },
    {
      id: '11',
      alt: 'digital bound our_clients11',
      src: 'assets/images/our_clients/11.png',
    },
    {
      id: '12',
      alt: 'digital bound our_clients12',
      src: 'assets/images/our_clients/12.png',
    },
    {
      id: '13',
      alt: 'digital bound our_clients13',
      src: 'assets/images/our_clients/13.png',
    },
    {
      id: '14',
      alt: 'digital bound our_clients14',
      src: 'assets/images/our_clients/14.png',
    },
    {
      id: '15',
      alt: 'digital bound our_clients15',
      src: 'assets/images/our_clients/15.png',
    },
    {
      id: '16',
      alt: 'digital bound our_clients16',
      src: 'assets/images/our_clients/16.png',
    },
    {
      id: '17',
      alt: 'digital bound our_clients17',
      src: 'assets/images/our_clients/17.png',
    },
    {
      id: '18',
      alt: 'digital bound our_clients18',
      src: 'assets/images/our_clients/18.png',
    },
    {
      id: '19',
      alt: 'digital bound our_clients19',
      src: 'assets/images/our_clients/19.png',
    },
    {
      id: '20',
      alt: 'digital bound our_clients20',
      src: 'assets/images/our_clients/20.png',
    },
    {
      id: '21',
      alt: 'digital bound our_clients21',
      src: 'assets/images/our_clients/21.png',
    },
    {
      id: '22',
      alt: 'digital bound our_clients22',
      src: 'assets/images/our_clients/22.png',
    },
    {
      id: '23',
      alt: 'digital bound our_clients23',
      src: 'assets/images/our_clients/23.png',
    },
    {
      id: '24',
      alt: 'digital bound our_clients24',
      src: 'assets/images/our_clients/24.png',
    },
    {
      id: '25',
      alt: 'digital bound our_clients25',
      src: 'assets/images/our_clients/25.png',
    },
    {
      id: '26',
      alt: 'digital bound our_clients26',
      src: 'assets/images/our_clients/26.png',
    },
    {
      id: '27',
      alt: 'digital bound our_clients27',
      src: 'assets/images/our_clients/27.png',
    },
  ];
  secondSlidesStore: ISlideStore[] = [
    {
      id: '27',
      alt: 'digital bound clients27',
      src: 'assets/images/our_clients/27.png',
    },
    {
      id: '28',
      alt: 'digital bound clients28',
      src: 'assets/images/our_clients/28.png',
    },
    {
      id: '29',
      alt: 'digital bound clients29',
      src: 'assets/images/our_clients/29.png',
    },
    {
      id: '30',
      alt: 'digital bound clients30',
      src: 'assets/images/our_clients/30.png',
    },
    {
      id: '31',
      alt: 'digital bound clients31',
      src: 'assets/images/our_clients/31.png',
    },
    {
      id: '32',
      alt: 'digital bound clients32',
      src: 'assets/images/our_clients/32.png',
    },
    {
      id: '33',
      alt: 'digital bound clients33',
      src: 'assets/images/our_clients/33.png',
    },
    {
      id: '34',
      alt: 'digital bound clients34',
      src: 'assets/images/our_clients/34.png',
    },
    {
      id: '35',
      alt: 'digital bound clients35',
      src: 'assets/images/our_clients/35.png',
    },
    {
      id: '36',
      alt: 'digital bound clients36',
      src: 'assets/images/our_clients/36.png',
    },
    {
      id: '37',
      alt: 'digital bound clients37',
      src: 'assets/images/our_clients/37.png',
    },
    {
      id: '38',
      alt: 'digital bound clients38',
      src: 'assets/images/our_clients/38.png',
    },
    {
      id: '39',
      alt: 'digital bound clients39',
      src: 'assets/images/our_clients/39.png',
    },
    {
      id: '40',
      alt: 'digital bound clients40',
      src: 'assets/images/our_clients/40.png',
    },
    {
      id: '41',
      alt: 'digital bound clients41',
      src: 'assets/images/our_clients/41.png',
    },
    {
      id: '42',
      alt: 'digital bound clients42',
      src: 'assets/images/our_clients/42.png',
    },
    {
      id: '43',
      alt: 'digital bound clients43',
      src: 'assets/images/our_clients/43.png',
    },
    {
      id: '44',
      alt: 'digital bound clients44',
      src: 'assets/images/our_clients/44.png',
    },
    {
      id: '45',
      alt: 'digital bound clients45',
      src: 'assets/images/our_clients/45.png',
    },
    {
      id: '46',
      alt: 'digital bound clients46',
      src: 'assets/images/our_clients/46.png',
    },
    {
      id: '47',
      alt: 'digital bound clients47',
      src: 'assets/images/our_clients/47.png',
    },
    {
      id: '48',
      alt: 'digital bound clients48',
      src: 'assets/images/our_clients/48.png',
    },
  ];
  firstOwlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    smartSpeed: 500,
    margin: 15,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 6,
      },
    },
  };
  secondOwlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    smartSpeed: 500,
    margin: 15,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 6,
      },
    },
    lazyLoad: true,
  };
}
