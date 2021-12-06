import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

interface Blueprint {
  id: Number,
  name: String,
  recipe: Array<any>
}

interface RawMaterial {
  id: Number,
  name: String,
  level: Number,
}

interface ComponentItem {
  id: Number,
  name: String,
  blueprint: Blueprint
}

interface FinalItem {
  id: Number,
  name: String,
  blueprint: Blueprint
}

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  rawMaterials: Array<RawMaterial> = [];
  componentMaterials: Array<ComponentItem> = [];
  finalItems: Array<FinalItem> = [];

  constructor(private http: HttpClient, private userService: UserService) {
    console.log('constructing production service.')
    this.rawMaterials.push(
      {
        id: -1,
        name: 'Copper Ore',
        level: 1 
      }
    )
  }

  addRawMaterial(): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:4100/production/addRawMaterial', {msg: 'hello'}, {headers: headers})
  }
}
