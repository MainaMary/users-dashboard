import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/users/user.service';
import { IGetUsers, IUser } from '../../services/models/user';
import { Table, TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableModule, RouterLink, ProgressSpinnerModule, InputTextModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  
  constructor(private userService: UserService){}
  allusers: IGetUsers[] = []
  loading: boolean | undefined;
  @ViewChild('dt') dt: Table | undefined

  ngOnInit(): void{
    this.getUsers();
  }
 
  getUsers(){
    this.loading = true
    this.allusers = this.userService.getAllUsers()
    if(this.allusers.length == 0){
      this.userService.tempUsers$.subscribe({
        next: (users) => {
          this.loading = false
          this.allusers = users
        } 
      });
    }
    this.loading = false
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getEventValue($event:any) :string {
    return $event.target.value;
  }

  clear(table: Table) {
    table.clear();
}
}
