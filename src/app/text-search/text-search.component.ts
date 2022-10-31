import { Component, OnInit , ViewChild} from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { TextSearchApiService } from '../text-search-api.service';
import {MatAccordion} from '@angular/material/expansion';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';

export interface ISearchArgs {
  inputString: string,
  searchString: string,
  isFullText: boolean,
  isCaseSensitive: boolean
}

class SearchArgs implements ISearchArgs {
  inputString: string;
  searchString: string;
  isFullText: boolean;
  isCaseSensitive: boolean;
  constructor(inputString: string, searchString:string, isFullText:boolean, isCaseSensitive: boolean) {
    this.inputString = inputString;
    this.searchString = searchString;
    this.isFullText = isFullText;
    this.isCaseSensitive = isCaseSensitive;
  }
}

class SearchArgsResponseHistory extends SearchArgs {
  response: number;
  date: string;
  constructor(inputString: string, searchString:string, isFullText:boolean, isCaseSensitive: boolean, response: number, date: string){
    super(inputString, searchString,isFullText,isCaseSensitive);
    this.response = response;
    this.date = date;
  }
}

class HistoryDataSource extends DataSource<SearchArgsResponseHistory> {
  private _dataStream = new ReplaySubject<SearchArgsResponseHistory[]>();
  constructor(initialData: SearchArgsResponseHistory[]) {
    super();
    this.setData(initialData);
  }
  connect(): Observable<SearchArgsResponseHistory[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: SearchArgsResponseHistory[]) {
    this._dataStream.next(data);
  }

}
@Component({
  selector: 'app-text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.css']
})

export class TextSearchComponent implements OnInit {
  searchArgsResponseHistory!: Array<any>;
  searchArgs!:SearchArgs;
  response!:any;
  displayedColumns: string[] = ['inputString', 'searchString', 'isFullText', 'isCaseSensitive', 'response', 'date'];
  dataSource = new HistoryDataSource(this.searchArgsResponseHistory);

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service:TextSearchApiService) { }

  ngOnInit(): void {    
    this.searchArgs = new SearchArgs("","",false, false);
    this.service.getTextSearch()
    .subscribe((data: SearchArgs) => this.searchArgs = {
      inputString: data["inputString"],
      searchString: data["searchString"],
      isFullText: data["isFullText"],
      isCaseSensitive: data["isCaseSensitive"]
    });
    this.searchArgsResponseHistory = [];
    this.dataSource.setData(this.searchArgsResponseHistory);
  }
  
  post() {
    this.service.postTextSearch(this.searchArgs)
    .subscribe((data: any) => this.response = data);
  }

  clear() {
    this.searchArgs = new SearchArgs("","",false, false);
    this.searchArgsResponseHistory = [];
    this.response = -1;
  }

  save(){
    this.searchArgsResponseHistory.push({
      inputString:this.searchArgs.inputString,
      searchString:this.searchArgs.searchString,
      isFullText: this.searchArgs.isFullText,
      isCaseSensitive: this.searchArgs.isCaseSensitive,
      response: this.response,
      date: new Date().toISOString()
    });
    this.dataSource.setData(this.searchArgsResponseHistory);
    this.searchArgs = new SearchArgs("","",false, false);
    this.response = -1;
  }

  navigateItd(){
    window.open('https://itd.acgov.org/', '_blank');
  }

}
