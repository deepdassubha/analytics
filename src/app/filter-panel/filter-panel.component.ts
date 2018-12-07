import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {

  @Output() onFilterDataChange: EventEmitter<any> = new EventEmitter<any>();

  //disabled property of filter items
  yearDisabled: boolean = true;
  fromDate: boolean = true;
  toDate: boolean = true;

  //style property of filter items
  yearStyle: any = { color: 'gray' };
  fromStyle: any = { color: 'gray' };
  toStyle: any = { color: 'gray' };

  constructor() { }

  ngOnInit() {
  }

  /* @todo filter by report */
  filterByReport(val) {
    console.log(val);
    this.updateUIFilters(val);
    this.onFilterDataChange.emit({
      type: "report",
      eventData: val
    });
  }


  /* update the ui filters */
  updateUIFilters(val) {
    if (val === 'customdate') {
      this.yearDisabled = false;
      this.fromDate = false;
      this.toDate = false;
      this.yearStyle.color = 'white';
      this.fromStyle.color = 'white';
      this.toStyle.color = 'white';
    } else {
      this.yearDisabled = true;
      this.fromDate = true;
      this.toDate = true;
      this.yearStyle.color = 'gray';
      this.fromStyle.color = 'gray';
      this.toStyle.color = 'gray';
    }
  }

  /* @todo filter by from date */
  filterByFromDate(val){
    console.log(val);
  }

  /* @todo filter by to date*/
  filterByToDate(val){
    console.log(val);
  }

}
