import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-examples',
  templateUrl: './rxjs-examples.component.html',
  styleUrls: ['./rxjs-examples.component.scss']
})
export class RxjsExamplesComponent {


  constructor() { }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  
    this.runExample();
  }


  runExample(){
    let myObservable = this.makeObservable();
    let observer = {
      next: (val)=>{
        console.log(val, "IN NEXT");
      },
      error: (err)=>{
        console.error(err);
      },
      complete:()=>{
        console.log("COMPLETE");
      }
    };

    // console.log("BEFORE");
    // myObservable.subscribe(observer);
    // console.log("After");

    let btnObservable = this.makeButtonClickObservable();
    // btnObservable.subscribe(observer);

  }

  makeObservable():Observable<any>{
    return new Observable((observer)=>{
      observer.next(1);
      observer.next(2);
      setTimeout(()=>{
        observer.next(3);
        observer.error("MY ERROR");
        observer.next(4);
      }, 2000);
    });
  }

    makeButtonClickObservable():Observable<any>{
    return new Observable((observer)=>{
      let button = document.getElementById("myButton");
      button.addEventListener('click', (e)=>{
        observer.next(e);
      });
    });
  }

}
























  // 1. Basic
  // 2. Button


  // runExample(){
  //   let myObservable = this.makeObservable();

  //   let myObserver = {
  //     next: (val)=>{
  //       console.log(val);
  //     },
  //     error: (err)=>{
  //       console.error(err);
  //     },
  //     complete: ()=>{
  //       console.log("Complete");
  //     }
  //   }

  //   myObservable.subscribe(myObserver);

  //   let myBtnObservable = this.makeButtonClickObservable();

  //   myBtnObservable.subscribe(myObserver);

  // }

  // makeObservable():Observable<any>{
  //   return new Observable((observer)=>{
  //     observer.next(20);
  //     observer.next(21);
  //     setTimeout(()=>{
  //       observer.next("Hello");
  //       observer.complete();
  //       observer.next("World");
  //     }, 1000);
  //   });
  // }

  // makeButtonClickObservable():Observable<any>{
  //   return new Observable((observer)=>{
  //     let button = document.getElementById("myButton");
  //     button.addEventListener('click', (e)=>{
  //       observer.next(e);
  //     });
  //   });
  // }

