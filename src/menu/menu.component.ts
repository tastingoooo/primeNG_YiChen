import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'his-menu',
  standalone: true,
  imports: [CommonModule, ButtonModule, ToolbarModule, MenubarModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = this.items = [
      {
        label: '',
        icon: 'pi pi-th-large',
        items: [
          {
            label: '門診醫囑系統',
            icon: 'pi pi-fw pi-plus',
            badgeStyleClass:"color:white",
          },
          {
            label: '心臟移植表單',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: '住院醫囑系統',
            icon: 'pi pi-fw pi-plus',
          },
          {
            separator:true,
          },
          {
            label: '查看全部',
          },
        ]
      }
    ];
  }
}
