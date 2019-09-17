import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.runSubject();
    // this.runBehaviorSubject();
    // this.runReplaySubject();
  }

  runSubject(){
    let subject = new Subject();
    subject.next(1);
    subject.subscribe((val)=>{ console.log("Subject OBSERVER 1:", val) });
    subject.next(2);
    subject.subscribe((val)=>{ console.log("Subject OBSERVER 2:", val) });
    subject.next(3);
  }

  runBehaviorSubject(){
    let bSubject = new BehaviorSubject(0);
    bSubject.next(1);
    bSubject.subscribe((val)=>{ console.log("BehaviorSubject OBSERVER 1:", val) });
    bSubject.next(2);
    bSubject.subscribe((val)=>{ console.log("BehaviorSubject OBSERVER 2:", val) });
    bSubject.next(3);
  }

  runReplaySubject(){
    let bSubject = new ReplaySubject(3);
    bSubject.next(0);
    bSubject.next(1);
    bSubject.subscribe((val)=>{ console.log("ReplaySubject OBSERVER 1:", val) });
    bSubject.next(2);
    bSubject.next(2.5);
    bSubject.next(3);
    bSubject.subscribe((val)=>{ console.log("ReplaySubject OBSERVER 2:", val) });
    bSubject.next(4);
    bSubject.next(5);
  }

}
