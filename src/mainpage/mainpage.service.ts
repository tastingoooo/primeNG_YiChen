import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {

  constructor() { }

  getNews() {
    return [
      {
        date:"2023-07-05 11:11",
        message:"您目前有２張沙發被咬壞。",
        href:"/"
      },
      {
        date:"2023-07-05 13:01",
        message:"您目前有１１個碗盤碎在地上。",
        href:"/"
      },
      {
        date:"2023-07-05 15:32",
        message:"您目前有６９個小孩的父母須安撫。",
        href:"/"
      },
      {
        date:"2023-07-05 19:55",
        message:"您的鄰居快要報警了。",
        href:"/"
      }
    ]
  }
}
