import { Component, OnInit } from '@angular/core';
import { of, Observable, interval, concat, fromEvent } from 'rxjs';
import { map, filter, scan, switchAll, switchMap, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  _mapAndFilter: any[] = [];
  _scan: any[] = [];
  _switchMap: any[] = [];
  _concat: any[] = [];
  _tap: any[] = [];
  _dAndD: any[] = [];

  constructor() { }

  ngOnInit() {
    let myObservable = of(1,2,3,4);
    // let myObservable = interval(1000);

    // this.mapAndFilter.call(this, myObservable);
    // this.scan.call(this, myObservable);
    // // this.switchMap.call(this, myObservable);
    // // this.concat.call(this);
    // this.tap.call(this, myObservable);
  }

  ngAfterViewInit(): void {
    this.debounceAndDistinct.call(this);
  }

  mapAndFilter(obs: Observable<any>){
    obs.pipe(
      map( (val) => {return val * 3 } ),
      filter( (val) => { return (val % 2) === 0 })
    ).subscribe((value)=>{
      this._mapAndFilter.push(value);
    });
  }

  scan(obs: Observable<any>){
    obs.pipe(
      scan((acc, curr)=>{ return acc + curr}, 0)
    ).subscribe((currentSum)=>{
      this._scan.push(currentSum);
    });
  }

  switchMap(obs: Observable<any>){
    obs.pipe(
      switchMap(()=>{ return of(9999, 10000, -3)})
    ).subscribe((value)=>{
      this._switchMap.push(value);
    });
  }

  concat(){
    let obs1 = of(3,22,7);
    let obs2 = new Observable((observer)=>{ 
      setTimeout(()=>{
        observer.next("Hello");
        observer.complete();
      }, 3000);
    });
    let obs3 = of([43,2,11]);

    concat(
      obs1,
      obs2,
      obs3
    ).subscribe((val)=>{
      this._concat.push(val);
    });
  }

  tap(obs: Observable<any>){
     obs.pipe(
      tap(val => console.log(`BEFORE MAP: ${val}`)),
      tap(val => val + 10),
      tap(val => console.log(`AFTER MAP: ${val}`))
    ).subscribe((val)=>{ this._tap.push(val); })
  }

  debounceAndDistinct(){
    fromEvent(document.getElementById("clickMe"), "click").pipe(
      map((e) => {
        let xVal = (<MouseEvent>e).clientX;
        return xVal;
      }),
      // debounceTime(500),
      distinctUntilChanged()
    ).subscribe((val)=>{ this._dAndD.push(val); })
  }



}
