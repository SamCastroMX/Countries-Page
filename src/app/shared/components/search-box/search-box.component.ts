import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscriber, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})

export class SearchBoxComponent implements OnInit, OnDestroy{
  
  private deboucer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;
  
  @Input()
  public placeholder: string = '';
  
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();
  
  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();
  
  ngOnInit(): void {
    
    this.debouncerSuscription = this.deboucer
    .pipe(
      debounceTime(300)
      )
      .subscribe(value =>{
        this.onDebounce.emit(value)
      })
    }
    
    ngOnDestroy(): void {
      this.debouncerSuscription?.unsubscribe
    }
    
    @ViewChild('txtInput')
    txtInput!: ElementRef<HTMLInputElement>;
    
    emitValue(newTerm: string): void {
    this.onValue.emit(newTerm)
  }

  onKeyPress(searchTerm :string){
   this.deboucer.next(searchTerm)
  }

}
