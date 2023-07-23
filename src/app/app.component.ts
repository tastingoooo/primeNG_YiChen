import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button'
import { MenuComponent } from 'src/menu/menu.component';
import { MainPageComponent } from 'src/mainpage/mainpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, ButtonModule, MenuComponent, MainPageComponent]
})
export class AppComponent {
  title = 'primeNG_YiChen';
}
