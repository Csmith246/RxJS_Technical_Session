import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap
} from 'rxjs/operators';
import { of, pipe, fromEvent } from 'rxjs';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements AfterViewInit {

  continents = [
    'africa',
    'antarctica',
    'asia',
    'australia',
    'europe',
    'north america',
    'south america'
  ];

  constructor() { }

  ngAfterViewInit() {
    // this.startTypeAhead.call(this);
  }

  startTypeAhead(){
    fromEvent(document.getElementById('type-ahead'), 'keyup')
      .pipe(
        debounceTime(200),
        map((e: any) => e.target.value),
        distinctUntilChanged(),
        switchMap(this.fakeContinentsRequest.bind(this)),
        tap(c => (document.getElementById('output').innerText = c.join('\n')))
      ).subscribe();
  }

  filterContinents (keys: string):string[]{
    return this.continents.filter(e => e.indexOf(keys.toLowerCase()) > -1)
  }
  
  fakeContinentsRequest(keys){
    return of(this.filterContinents.call(this, keys))
    .pipe(
      tap(_ => console.log(`API CALL at ${new Date()}`))
    );
  }
  
  

}
