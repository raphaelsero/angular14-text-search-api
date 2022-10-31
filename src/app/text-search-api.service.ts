import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextSearchApiService {
  readonly textSearchApiUrl = "https://localhost:7298/api/TextSearch";
  constructor(private http:HttpClient) { }

  postTextSearch(data:any) {
    return this.http.post(this.textSearchApiUrl, data);
  }
  getTextSearch():Observable<any> {
    return this.http.get(this.textSearchApiUrl);
  }
}
