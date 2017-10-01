import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService extends DataService  {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/users', http);
   }

}
