import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'kinvey-angular-sdk';
import { UserDataService } from '../../shared/services/user-data.service';
import { UserService } from 'kinvey-angular-sdk';
import { EditorDilogComponent } from './../../shared/components/editor-dilog/editor-dilog.component';
import { EditorDialog } from './../../shared/components/editor-dilog/editor-dialog.model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TableConfig } from './../../shared/models/table-config.model';
import axios from 'axios'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedGroup: string = '';
  collection: any;
  public tableConfigData: TableConfig;
  constructor(public router: Router, public dialog: MatDialog, private userService: UserService, datastoreService: DataStoreService, private UserDataService: UserDataService) {
    this.collection = datastoreService.collection('Inventory');
  }

  ngOnInit() {
    this.tableConfigData = new TableConfig();
    this.frameTableConfgiData();
  }

  frameTableConfgiData() {
    this.tableConfigData.headers = ['Group Name', 'Status', 'Modify'];
    this.tableConfigData.data = [{}];
    this.tableConfigData.keys = ['groupname', 'status'];
  }

  openEditorDialog(title, record, actionText1, actionText2) {
    const dialogData = new EditorDialog(title, record, actionText1, actionText2);
    const dialogRef = this.dialog.open(EditorDilogComponent, {
      data: dialogData,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'cancelled') {

      }
    });
  }

  create(){
    this.openEditorDialog('Create a Group', null,'Save','Cancel');
  }

  async createGroup() {
    try {
      let data = this.UserDataService.getUserId();
      let obj = { groupname: 'test', status: 'active' }
      const savedEntity = await this.collection.save(obj);
      console.log(savedEntity);
    } catch (error) {
      console.log(error);
    }
  }

  find() {
    this.collection.find()
      .subscribe((entities) => {
        console.log(entities);
      }, (error) => {
        console.log(error);
      });
  }

  async update() {
    try {
      let obj = { _id: '620582aadc6dd8001693c400', groupname: 'demo' }
      const user = await this.collection.update(obj);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  updateEntry(e) {

  }

}
