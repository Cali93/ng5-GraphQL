import { Component, TemplateRef, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as Query from '../../graphql/global-query';
import 'rxjs/add/operator/map';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  modalRef: BsModalRef;
  users: Array<any> = [];
  user: any = {};
  name: any;
  constructor(private apollo: Apollo, private modalService: BsModalService) { }

  ngOnInit() {
    this.getUsers();
  }

  /**
   * Create User
   * @param value     Name of User
   */

   createUser(value){
     this.apollo
        .mutate({
          mutation: Query.addUser,
          variables: {
            name: value,
            email: value
          },
          update:(proxy, { data: {addUser}}) => {
            // Read the data from our cache for this query.
            const data: any = proxy.readQuery({ query: Query.Users });

            data.users.push(addUser);

             // Write our data back to the cache.
            proxy.writeQuery({ query: Query.Users, data });
          }
        });
   }

   /**
   * Remove User
   * @param id
   */

   removeUser(id){
     this.apollo
        .mutate({
          mutation: Query.removeUser,
          variables: {
            id: id
          },
          update: ( proxy, {data: {removeUser}}) => {
            // Read the data from our cache for this query.
            const data: any = proxy.readQuery({query : Query.Users});

            const index = data.users.map(function(x){ return x.id; }).indexOf(id);

            data.users.splice(index, 1);

            proxy.writeQuery({ query: Query.Users, data });
          }
        }).subscribe(({data}) => {
          console.log(data);
        }, (error) => {
          console.log('There was an error sending the query', error);
        });
   }

}
