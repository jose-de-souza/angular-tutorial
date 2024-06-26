import { Component } from "@angular/core";

@Component({
    selector: 'app-users-list',
    templateUrl: './usersList.component.html',
    styleUrl: './usersList.component.scss'
})
export class UsersListComponent {
    // Put Business Logic on the components and not on the templates
    selectedUser = {
        id: '',
        name: '',
        age: ''
    };

    allUsers = [
        {
            id: this.generateId(),
            name: 'Kermit the Frog',
            age: '21'
        },
        {
            id: this.generateId(),
            name: 'Piggy the Pig',
            age: '19'
        },
        {
            id: this.generateId(),
            name: 'Elmo The Animal',
            age: '19'
        },
        {
            id: this.generateId(),
            name: 'Baby Sitter',
            age: '30'
        }
    ]

    loggedUser = this.allUsers[0];

    setName(event: Event): void {
        let name: string = (event.target as HTMLInputElement).value;
        this.selectedUser.name = name;
        console.log('setName', name);
    }

    setAge(event: Event): void {
        let age: string = (event.target as HTMLInputElement).value;
        this.selectedUser.age = age;
        console.log('setAge', age);
    }

    generateId(): string {
        return Math.random().toString(16);
    }

    resetSelectedUser(): void {
        this.selectedUser = {
            id: '',
            name: '',
            age: ''
        };
    }

    save(): void {
        if (this.selectedUser.name === '' || this.selectedUser.age === '') {
            return;
        }

        if (this.selectedUser.id === '') {
            this.selectedUser.id = this.generateId();
        }

        this.allUsers.push(this.selectedUser);

        console.log('save', this.selectedUser.id, this.selectedUser.name, this.selectedUser.age);
        this.resetSelectedUser();
    }

    remove(id: string): void {
        if (this.loggedUser.id === id) {
            return;
        }
        this.allUsers = this.allUsers.filter(user => user.id !== id);
    }
}