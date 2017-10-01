import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AppError } from './../common/app-error';
import { NotFoindError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .map(Response => Response.json())
      .catch(this.HandlerError);
  }

  private HandlerError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoindError());
    }
    return Observable.throw(new AppError(error));
  }
}
