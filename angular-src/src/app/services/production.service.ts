import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

interface Blueprint {
  id: Number,
  name: String,
  level: Number,
  recipe: Array<any>,
  discipline: String,
  description?: String
}
interface RawMaterial {
  id: Number,
  name: String,
  level: Number,
  description?: String
}
interface ComponentMaterial {
  id: Number,
  name: String,
  blueprint: Blueprint,
  description?: String
}
interface FinalItem {
  id: Number,
  name: String,
  blueprint: Blueprint,
  description?: String
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
        level: 1 ,
      },
      {
        id: -4,
        name: 'Lignite Coal',
        level: 1,
      },
    )
    this.componentMaterials.push(
      {
        id: -2,
        name: 'Copper Bar',
        blueprint: {
          id: -1,
          level: 1,
          name: 'Copper Bar Recipe',
          recipe: [],
          discipline: 'Mining'
        },
      }
    )
    this.finalItems.push(
      {
        id: -3,
        name: 'Copper Shield',
        blueprint: {
          id: -1,
          level: 1,
          name: 'Copper Shield Recipe',
          recipe: [],
          discipline: 'Shieldcrafting'
        },
      }
    )
  }

  addRawMaterial(rawMaterial: RawMaterial): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:4100/production/addRawMaterial', {mat: rawMaterial}, {headers: headers})
  }
}
