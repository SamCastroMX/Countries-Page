import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})

export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtInput')
  txtInput!: ElementRef<HTMLInputElement>;

  emitValue(newTerm: string): void {
    this.onValue.emit(newTerm)
  }

}
