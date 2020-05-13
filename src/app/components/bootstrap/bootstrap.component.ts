import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {
  users: User[];
  // date
   todaysDate = new Date();
  constructor(private router: Router, private dataService: DataService) { }


  ngOnInit(): void {
    console.log('ngOnInit Called');
    this.dataService.getUsers().subscribe(data => {
      console.log('Get User List Called: ' + data);
      this.users = data;
    }, err => {
      console.log('Error occured: ' + err.stack);
      return false;
    })

  }

}
