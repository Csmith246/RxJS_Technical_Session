import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-examples';
  selectedTab:number = 0;

  selectedTabKey:string = "SelectedTabKey";

  ngOnInit(): void {
    if(localStorage.getItem(this.selectedTabKey) != null){
      this.selectedTab = +localStorage.getItem(this.selectedTabKey);
    }
  }

  newTabIndex(event){
    localStorage.setItem(this.selectedTabKey, event);
  }
}
