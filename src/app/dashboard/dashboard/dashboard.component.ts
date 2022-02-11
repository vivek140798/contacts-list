import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'kinvey-angular-sdk';
import { UserDataService } from '../../shared/services/user-data.service';
import { UserService } from 'kinvey-angular-sdk';
import { EditorDilogComponent } from './../../shared/components/editor-dilog/editor-dilog.component';
import { EditorDialog } from './../../shared/components/editor-dilog/editor-dialog.model';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedGroup:string = '';
  collection: any;
  contacts = new Array(10);
  constructor(public dialog: MatDialog, private userService: UserService, datastoreService: DataStoreService, private UserDataService: UserDataService) {
    this.collection = datastoreService.collection('groups');
  }

  ngOnInit() {
    // this.update();
  }

  openEditorDialog(record, title, actionText1, actionText2) {
    const dialogData = new EditorDialog(record, title, actionText1, actionText2);
    const dialogRef = this.dialog.open(EditorDilogComponent, {
      data: dialogData,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== 'cancelled') {
        
      }
    });
  }

  async createGroup() {
    try {
      let data = this.UserDataService.getUserId();
      let obj={groupname: 'test', status: 'active'}
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
      let obj={_id: '620582aadc6dd8001693c400',groupname: 'demo'}
      const user = await this.collection.update(obj);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

}
