import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

export interface Blueprint {
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
  discipline: String,
  description?: string
}
export interface ComponentMaterial {
  _id: number,
  name: string,
  level?: number,
  blueprint: Blueprint,
  discipline: String,
  description?: string
}
export interface FinalItem {
  _id: number,
  name: string,
  level?: number,
  blueprint: Blueprint,
  discipline: String,
  description?: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor(private http: HttpClient, private userService: UserService) {
    if (this.userService.user == null) {
      this.userService.retrieveUserData();
    }  
  }

  //GET
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
  getFinalItems() {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.get(`http://localhost:4100/production/allFinal/${this.userService.user.id}`, {headers: headers})
  }
  getAllItemsMadeFrom(matId:number) {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.get(`http://localhost:4100/production/allMadeFrom/${matId}`, {headers: headers})
  }

  //ADD
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
  addFinalItem(finalItem: FinalItem) {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(`http://localhost:4100/production/addFinalItem`, {mat: finalItem, id: this.userService.user.id}, {headers: headers})
  }

  //EDIT
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
  deleteComponentMaterial(componentMaterialId: number): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.delete(`http://localhost:4100/production/deleteComponentMaterial/${componentMaterialId}`, {headers: headers})
  }
  deleteFinalItem(finalItemId: number): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userService.authToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.delete(`http://localhost:4100/production/deleteFinalItem/${finalItemId}`, {headers: headers})
  }
}
