import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-nav',
  templateUrl: './filter-nav.component.html',
  styleUrls: ['./filter-nav.component.css']
})
export class FilterNavComponent {
  rangevalue = 0;

  valueChanged(event:any) {
    this.rangevalue = event.target.value;
  }

}
