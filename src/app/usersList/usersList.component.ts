import { Component } from "@angular/core";

@Component({
    selector: 'app-users-list',
    templateUrl: './usersList.component.html',
    styleUrl: './usersList.component.scss'
})
export class UsersListComponent {
    // Put Business Logic on the components and not on the templates
    loggedUser =  {
        id: 1,
        name: 'Kermit the Frog',
        age: 21
    }

    allUsers = [
        {
            id: 1,
            name: 'Kermit the Frog',
            age: 21
        },
        {
            id: 2,
            name: 'Piggy the Pig',
            age: 19
        },
        {
            id: 3,
            name: 'Elmo The Animal',
            age: 19
        },
        {
            id: 4,
            name: 'Baby Sitter',
            age: 30
        }
    ]
}