import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  children?: RouteInfo
}

const getStartedRoute = { path: '/get-started', title: 'Get Started', icon: 'nc-user-run', class: '' }
const tutorialsRoute = {
  path: '/tutorials', title: 'Tutorials', icon: 'nc-spaceship', class: '',
  children: [
    { path: '/tutorials/sdk-python', title: 'Python', icon: '', class: '' },
    { path: '/tutorials/thing-raspberrypi', title: 'Raspberry Pi', icon: '', class: '' },
    { path: '/tutorials/thing-arduino', title: 'Arduino', icon: '', class: '' },
    { path: '/tutorials/app-django', title: 'Django', icon: '', class: '' },
    { path: '/tutorials/app-angular', title: 'Angular', icon: '', class: '' }
  ]
}
const howToRoute = { path: '/how-to', title: 'How-To Guides', icon: 'nc-bullet-list-67', class: '' }

const technicalRefRoute = {
  path: '/references', title: 'Technical References', icon: 'nc-book-bookmark', class: '',
  children: [
    { path: '/references/bucket-http', title: 'Bucket HTTP API', icon: '', class: '' },
    { path: '/references/bucket-mqtt', title: 'Bucket MQTT API', icon: '', class: '' }
  ]
}

const explanationRoute = { path: '/explanations', title: 'Background Info', icon: 'nc-single-copy-04', class: '' }

const privacyRoute = { path: '/privacy', title: 'Privacy Policy', icon: 'nc-paper', class: '' }
const termsRoute = { path: '/terms', title: 'Terms and Conditions', icon: 'nc-paper', class: '' }

export const ROUTES: RouteInfo[] = [getStartedRoute, tutorialsRoute, howToRoute, technicalRefRoute, explanationRoute, privacyRoute, termsRoute];

@Component({
  selector: 'app-public-doc',
  templateUrl: './public-doc.component.html'
})
export class PublicDocComponent implements OnInit {

  public menuItems: any[];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.route.paramMap.subscribe(async params => {
      
    });
  }

  expand(id: string) {
    document.getElementById('children' + id).style.display = 'block';
  }
}
