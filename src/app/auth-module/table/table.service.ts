import { Injectable } from '@angular/core';
import { RegisterForm, LoginRegisterForm } from '../reg-form/regForm';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  loginData = new BehaviorSubject<LoginRegisterForm[]>([]);
  tableData = new BehaviorSubject<RegisterForm[]>([]);
  constructor() {
    const sessionData = this.getItem();
    if (sessionData) {
      this.tableData.next(sessionData);
    }
  }
  saveRecord(data: RegisterForm) {
    const saveTableData = this.tableData.getValue();
    saveTableData.push(data)
    this.setItem(saveTableData);
    this.tableData.next(saveTableData);
    console.log('this.tableData.getValue(): ', this.tableData.getValue());
  }
  setItem(tableData) {
    console.log("tableData ", tableData);
    sessionStorage.setItem('table', JSON.stringify(tableData));
  }
  getItem() {
    const data = JSON.parse(sessionStorage.getItem('table'));
    return data;
  }
  updateRecord(data: RegisterForm, index: number) {
    console.log("index ", index);
    console.log("data ", data);

    const updateTableData = this.tableData.getValue();
    console.log("updateTableData ", updateTableData);


    updateTableData.splice(index, 1, data);
    console.log("updateTableData ", updateTableData);


    this.setItem(updateTableData);
    this.tableData.next(updateTableData);
  }
  deleteRecord(index: number) {
    const deleteTableData = this.tableData.getValue();
    deleteTableData.splice(index, 1);
    console.log("deleteTableData ", deleteTableData);
    this.setItem(deleteTableData);
    this.tableData.next(deleteTableData);
  }
  findRecord(index: number) {
    const findTableData = this.tableData.getValue();
    console.log('findTableData', findTableData);
    return { ...findTableData[index] } as RegisterForm;
  }





  saveLoginRecord(data: LoginRegisterForm) {
    console.log("data ", data);
    this.setLoginItem(data);
  }
  setLoginItem(userData) {
    console.log("userData ", userData);
    sessionStorage.setItem('login', JSON.stringify(userData));
  }
  getLoginItem() {
    const data = JSON.parse(sessionStorage.getItem('login'));
    console.log("data ", data);
    return data;
  }
}
