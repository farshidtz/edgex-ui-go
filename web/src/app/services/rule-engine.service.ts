import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';
import { Stream } from '../contracts/stream';
import { Rule } from '../contracts/rule';

@Injectable({
  providedIn: 'root'
})
export class RuleEngineService {

  endpoint: string = "/ruleengine";
  version: string = "";

  streamUrl: string = `${this.endpoint}${this.version}/streams`;

  ruleUrl: string = `${this.endpoint}${this.version}/rules`;

  httpPostOrPutJSONOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': ''
    })
  };

  constructor(private http: HttpClient, private errorSvc: ErrorService) { }

  addStream(sql:string): Observable<string> {
    let url = `${this.streamUrl}`;
    return this.http.request('POST', url, {
      body: sql,
      responseType: 'text',
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }

  deleteOneStreamById(id: string): Observable<any> {
    let url = `${this.streamUrl}/${id}`;
    return this.http.delete(url)
  }

  updateStream(sql: string): Observable<any> {
    let url = `${this.streamUrl}`;
    return this.http.request('PUT', url, {
      body: sql,
      responseType: 'text',
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }

  findStreamByName(name: string): Observable<Stream> {
    let url = `${this.streamUrl}/${name}`;
    return this.http.get<Stream>(url).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }

  allStreams(): Observable<Stream[]> {
    let url = `${this.streamUrl}`;
    return this.http.get<Stream[]>(url).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }

  addRule(rule: any): Observable<string> {
    let url = `${this.ruleUrl}`;
    return this.http.request('POST', url, {
      body: JSON.stringify(rule),
      responseType: 'text',
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }

  deleteOneRuleById(id: string): Observable<any> {
    let url = `${this.ruleUrl}/${id}`;
    return this.http.delete(url);
  }

  updateRule(rule: any): Observable<string> {
    let url = `${this.ruleUrl}`;
    return this.http.request('PUT', url, {
      body: JSON.stringify(rule),
      responseType: 'text',
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }

  findRuleById(id: string): Observable<Rule> {
    let url = `${this.ruleUrl}/${id}`;
    return this.http.get<Rule>(url).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }

  allRules(): Observable<Rule[]> {
    let url = `${this.ruleUrl}`;
    return this.http.get<Rule[]>(url).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }

  getRuleStatusById(id: string): Observable<any> {
    let url = `${this.ruleUrl}/${id}/status`;
    return this.http.get<any>(url);
  }

  getRuleTopoById(id: string): Observable<Rule> {
    let url = `${this.ruleUrl}/${id}/topo`;
    return this.http.get<Rule>(url).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }

  startRule(id: string): Observable<string> {
    let url = `${this.ruleUrl}/${id}/start`;
    return this.http.request('POST', url, {
      responseType: 'text',
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }

  stopRule(id: string): Observable<string> {
    let url = `${this.ruleUrl}/${id}/stop`;
    return this.http.request('POST', url, {
      responseType: 'text',
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }

  restartRule(id: string): Observable<string> {
    let url = `${this.ruleUrl}/${id}/restart`;
    return this.http.request('POST', url, {
      responseType: 'text',
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).pipe(
      catchError(error => this.errorSvc.handleError(error))
    )
  }
}