import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

export interface Blueprint {
  _id: Number,
  name: String,
  level: Number,
  recipe: Array<any>,
  discipline: String,
  description?: String
}
export interface RawMaterial {
  _id: number,
  name: string,
  level: number,
  description?: string
}
export interface ComponentMaterial {
  _id: number,
  name: string,
  level?: number,
  blueprint: Blueprint,
  description?: string
}
export interface FinalItem {
  _id: number,
  name: string,
  blueprint: Blueprint,
  description?: string
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
        _id: -2,
        name: 'Copper Bar',
        blueprint: {
          _id: -1,
          level: 1,
          name: 'Copper Bar Recipe',
          recipe: [],
          discipline: 'Mining'
        },
      }
    )
    this.finalItems.push(
      {
        _id: -3,
        name: 'Copper Shield',
        blueprint: {
          _id: -1,
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
    return this.http.get(`http://localhost:4100/production/allRaw/${this.userService.user.id}`, {headers: headers})
  }

  getComponentMaterials() {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.get(`http://localhost:4100/production/allComponent/${this.userService.user.id}`, {headers: headers})
  }

  addRawMaterial(rawMaterial: RawMaterial): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(`http://localhost:4100/production/addRawMaterial`, {mat: rawMaterial, id: this.userService.user.id}, {headers: headers})
  }
  addComponentMaterial(componentItem: ComponentMaterial) {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(`http://localhost:4100/production/addComponentMaterial`, {mat: componentItem, id: this.userService.user.id}, {headers: headers})
  }

  editRawMaterial(rawMaterial: RawMaterial): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(`http://localhost:4100/production/editRawMaterial`, {mat: rawMaterial, id: this.userService.user.id}, {headers: headers})
  }

  deleteRawMaterial(rawMaterialId: number): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.delete(`http://localhost:4100/production/deleteRawMaterial/${rawMaterialId}`, {headers: headers})
  }
}
