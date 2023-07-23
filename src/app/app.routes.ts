import { Routes } from '@angular/router';
import { MainPageComponent } from 'src/mainpage/mainpage.component';

export const routes: Routes = [
  {
    path: "playground",
    loadComponent: () => import("src/app/interaction/interaction.component")
      .then((x) => x.InteractionComponent)
  },
  {
    path:"**",component:MainPageComponent
  }
];
