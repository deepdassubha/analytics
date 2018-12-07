import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "../../../node_modules/rxjs/Observable";

@Injectable()
export class DataServiceService {

  allData: any[];
  constructor(private http: HttpClient) { }

  /* getting all the data from back-end */
  getAllData(): Observable<any> {
    // return this.http.get("https://api.myjson.com/bins/1d1kwu");
    return this.http.get("https://api.myjson.com/bins/1dc3rq");
  }

  // getAllDataByReport(reportObject){
  //   return this.http.post("https://api.myjson.com/bins/1d1kwu",reportObject);
  // }
  getAllDataByReport(reportObject): Observable<any> {
    return this.http.get("https://api.myjson.com/bins/116fli");
  }

}