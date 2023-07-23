import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from 'primeng/dragdrop';
import { InteractionService } from './interaction.service';
import { Interaction } from './interaction';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'his-interaction',
  standalone: true,
  imports: [CommonModule, DragDropModule,TagModule,TableModule],
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
  providers: [InteractionService]
})
export class InteractionComponent {
  availableProducts: Interaction[] | undefined;

  selectedProducts: Interaction[] | undefined;

  draggedProduct: Interaction | undefined | null;

  productService: InteractionService = inject(InteractionService);

  ngOnInit() {
    this.selectedProducts = [];
    this.productService.getProductsSmall().then((products) => (this.availableProducts = products));
  }

  dragStart(product: Interaction) {
    this.draggedProduct = product;
  }

  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [...(this.selectedProducts as Interaction[]), this.draggedProduct];
      this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
      this.draggedProduct = null;
    }
  }

  dragEnd() {
    this.draggedProduct = null;
  }

  findIndex(product: Interaction) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as Interaction[]).length; i++) {
      if (product.id === (this.availableProducts as Interaction[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  getSeverity(status: string) {
    switch (status) {
      case '讚啦':
        return 'success';
      case '還行':
        return 'warning';
      case '我才不要':
        return 'danger';
    }
    return;
  }
}
