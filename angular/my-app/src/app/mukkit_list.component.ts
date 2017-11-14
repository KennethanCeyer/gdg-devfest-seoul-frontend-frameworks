import { Component, ViewChild, ElementRef } from '@angular/core';

const DEFAULT_INITIALIZE_FOOD_LIST: string[] = ['치킨', '탕수육', '닭도리탕'];

@Component({
  selector: 'mukkit-list',
  templateUrl: './mukkit_list.html',
  styleUrls: ['./mukkit_list.css']
})
export class MukkitListComponent {
  public foodList: string[] = [...DEFAULT_INITIALIZE_FOOD_LIST];
  public newFood: string;

  @ViewChild('input') inputEl: ElementRef;

  ngAfterViewInit() {
    this.focusFood();
  }

  focusFood(): void {
    this.inputEl.nativeElement.focus();
  }

  enterFood($event: KeyboardEvent): void {
    if ($event.keyCode === 13) {
      this.addFood();
    }
  }

  addFood(): void {
    if (this.foodList.indexOf(this.newFood) === -1) {
      this.foodList.push(this.newFood);
      this.newFood = '';
      this.focusFood();
    } else {
      alert('해당 음식은 이미 있습니다.');
    }
  }
}
