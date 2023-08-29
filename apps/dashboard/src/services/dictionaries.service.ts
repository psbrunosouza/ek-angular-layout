import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class DictionariesService {
  constructor(private httpClient: HttpClient) {}

  listDictionaries(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/dictionaries");
  }
}
