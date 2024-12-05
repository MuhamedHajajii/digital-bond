import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
interface IFeedBacks {
  id: string;
  name: string;
  comment: string;
  role: string;
}

@Component({
  selector: 'app-customers-reviews',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './customers-reviews.component.html',
  styleUrl: './customers-reviews.component.scss',
})
export class CustomersReviewsComponent {
  FeedBacks: IFeedBacks[] = [
    {
      id: '1',
      name: 'Mohamed',
      role: 'Marketing Manager',
      comment:
        'Wonderful agency to work with. Always working towards the delivery of projects. Very technical and knowledgeable in the Marketing.',
    },
    {
      id: '2',
      name: 'Menna',
      role: 'Sales Director',
      comment:
        'Very detailed and knowledgeable, they have managed to reduce my cost per click from FB and google by 100% compared to my old agency.',
    },
    {
      id: '3',
      name: 'Asma',
      role: 'CTO',
      comment:
        'Competent, professional and engaged team on managerial and individual levels.',
    },
    {
      id: '4',
      name: 'Mostafa',
      role: 'Business Owner',
      comment:
        'A fantastic agency that develops strategic creative and technology to deliver on our business objectives.',
    },
    {
      id: '5',
      name: 'Nada',
      role: 'Marketing Team Lead',
      comment:
        'We have a growing relationship with Digital Bond and they continually bring more ideas and resources to our company.',
    },
  ];
  FeedBacksOwlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    margin: 15,
    items: 1,
    lazyLoad: true,
  };
}
