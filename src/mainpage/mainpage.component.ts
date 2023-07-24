import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { InplaceModule } from 'primeng/inplace';
import { Mainpage } from './mainpage';
import { MainpageService } from './mainpage.service';

@Component({
  selector: 'his-mainpage',
  standalone: true,
  imports: [CommonModule,ButtonModule,StepsModule,InplaceModule],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
  providers:[MainpageService]
})
export class MainPageComponent implements OnInit {
  newsService=inject(MainpageService);
  items: MenuItem[] | undefined;
  news:Mainpage[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: '亂叫',
              routerLink: 'personal'
          },
          {
              label: '亂跳',
              routerLink: 'seat'
          },
          {
              label: '撕咬家具',
              routerLink: 'payment'
          },
          {
              label: '衝撞鄰居',
              routerLink: 'confirmation'
          }
      ];
      this.news=this.newsService.getNews();
  }
}
