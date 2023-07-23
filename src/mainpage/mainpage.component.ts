import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { InplaceModule } from 'primeng/inplace';

@Component({
  selector: 'his-mainpage',
  standalone: true,
  imports: [CommonModule,ButtonModule,StepsModule,InplaceModule],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainPageComponent implements OnInit {
  items: MenuItem[] | undefined;

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
  }
}
