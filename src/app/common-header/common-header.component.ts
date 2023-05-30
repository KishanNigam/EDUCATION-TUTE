import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css'],
})
export class CommonHeaderComponent implements OnInit {
  menuType: string = '';
  tuterName: string ='';
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('tuter') && val.url.includes('teacher')) {
          
          this.menuType = 'teacher';
          if(localStorage.getItem('tuter')){
            let tuterStore=localStorage.getItem('tuter');
            let tuterData = tuterStore && JSON.parse(tuterStore)[0];
            this.tuterName=tuterData.name;
          }
        } else {
      
          this.menuType = 'default';
        }
      }
    });
  }

  tuterLogOut() {
    localStorage.removeItem('tuter');
    this.route.navigate(['/']);
  }
}
