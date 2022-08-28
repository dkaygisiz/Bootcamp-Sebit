import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root',
})
export class getCatService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }

  public getCategories() {
    return this.base.getReq('/categories');
  }
}
