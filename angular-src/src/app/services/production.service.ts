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
interface ComponentMaterial {
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
  componentMaterials: Array<ComponentMaterial> = [];
  finalItems: Array<FinalItem> = [];

  constructor(private http: HttpClient, private userService: UserService) {
    console.log('constructing production service.')
    this.rawMaterials.push(
      {
        id: -1,
        name: 'Copper Ore',
        level: 1 
      },
      {
        id: -4,
        name: 'Lignite Coal',
        level: 1 
      },
    )
    this.componentMaterials.push(
      {
        id: -2,
        name: 'Copper Bar',
        blueprint: {
          id: -1,
          name: 'Copper Bar Recipe',
          recipe: []
        }
      }
    )
    this.finalItems.push(
      {
        id: -3,
        name: 'Copper Shield',
        blueprint: {
          id: -1,
          name: 'Copper Bar Recipe',
          recipe: []
        }
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
