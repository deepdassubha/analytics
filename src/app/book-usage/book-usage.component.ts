import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../services/data-service.service";

@Component({
  selector: 'app-book-usage',
  templateUrl: './book-usage.component.html',
  styleUrls: ['./book-usage.component.css']
})
export class BookUsageComponent implements OnInit {

  // contains all the table data
  data: any[];
  // total no of 'data per page' array
  paginationOptions: number[] = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30];
  //default data per page
  dataPerPage: number = 3;
  //current page no, by default 1st page
  currentPageNO: number = 0;
  //total no of pages
  totalPages: number;




  constructor(private ds: DataServiceService) { }
  ngOnInit() {
    this.ds.getAllData().subscribe(
      data => {
        // saving all the data to service
        this.ds.allData = data;
        //saving the copy of all data in current component
        // this.data = data.slice(0, this.dataPerPage);
        this.data = data;
        //calculating total no of pages
        this.calculateTotalNoOfPages();
        //going to first page by default
        this.gotoPage(0);
      },
      err => {
        console.log(err);
      }
    );
  }

  filterDataChangeHandler(event) {
    console.log(event);
    this.filterDataSwitch(event);
  }


  filterDataSwitch({type,eventData}) {
    switch (type) {
      case 'report':
        this.ds.getAllDataByReport(eventData).subscribe(data => {
          this.ds.allData = data;
          this.data = data;
          this.calculateTotalNoOfPages();
          this.gotoPage(0);
        }, err => {
          console.log(err);
        });
      break;
    }
  }




  /* calculating the no of pages based on the data */
  calculateTotalNoOfPages() {
    this.totalPages = Math.ceil(this.ds.allData.length / this.dataPerPage);
  }

  /* change the data per page option */
  changePagination(val) {
    val = parseInt(val);
    this.dataPerPage = val;
    this.calculateTotalNoOfPages();
    this.gotoPage(0);
  }

  /* go to a particular page if available */
  gotoPage(index) {
    this.currentPageNO = index;
    let base = this.currentPageNO * this.dataPerPage;
    this.data = this.ds.allData.slice(base, base + this.dataPerPage);
    console.log(base, base + this.dataPerPage);
  }

  /* go to next page corresponding to the current page if valid*/
  nextPage() {
    if ((this.currentPageNO + 1) >= this.totalPages) {
      return;
    }
    this.currentPageNO += 1;
    this.gotoPage(this.currentPageNO);
  }

  /* go to previous page corresponding to the current page if valid*/
  prevPage() {
    if ((this.currentPageNO - 1) < 0) {
      return;
    }
    this.currentPageNO -= 1;
    this.gotoPage(this.currentPageNO);
  }

}
