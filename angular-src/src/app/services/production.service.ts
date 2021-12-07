import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

export interface Blueprint {
  id: Number,
  name: String,
  level: Number,
  recipe: Array<any>,
  discipline: String,
  description?: String
}
export interface RawMaterial {
  id: Number,
  name: String,
  level: Number,
  description?: String
}
export interface ComponentMaterial {
  id: Number,
  name: String,
  blueprint: Blueprint,
  description?: String
}
export interface FinalItem {
  id: Number,
  name: String,
  blueprint: Blueprint,
  description?: String
}

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  rawMaterials = [];
  componentMaterials: Array<ComponentMaterial> = [];
  finalItems: Array<FinalItem> = [];

  constructor(private http: HttpClient, private userService: UserService) {
    
    if (this.userService.user == null) {
      this.userService.retrieveUserData();
    }

    this.getRawMaterials();
    
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

  getRawMaterials() {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.get(`http://localhost:4100/production/all/${this.userService.user.id}`, {headers: headers})
  }

  addRawMaterial(rawMaterial: RawMaterial): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(`http://localhost:4100/production/addRawMaterial`, {mat: rawMaterial, id: this.userService.user.id}, {headers: headers})
  }
}
