import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../events/event.service';

export interface User {
    id?: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
    address?: string;
    registrationDate: Date;
    userType: 'POSETILAC' | 'ADMIN';
    events?: Array<Event>;
    interests?: string;
}

@Injectable()
export class UserService {

    apiURL: string = "http://localhost:8181/users";
    activeUser: User;
    private users: Array<User>;

    constructor(private httpClient: HttpClient) {
        this.getUsers().subscribe((users: User[]) => {
            this.users = users;
        }, (err) => {
            console.log(err);
        });
    }

    private createUser(user: User) {
        this.httpClient.post(`${this.apiURL}/save`, user).subscribe((user: User) => this.users.push(user));;
    }

    public updateUser(user: User) {
        this.httpClient.put(`${this.apiURL}/update`, user).subscribe((user: User) => this.activeUser = user);
    }

    private deleteUser(id: number) {
        return this.httpClient.delete(`${this.apiURL}/delete/${id}`);
    }

    private getUserById(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.apiURL}/id/${id}`);
    }

    public getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.apiURL}/all`);
    }

    public getActiveUser() {
        if (this.activeUser != undefined) {
            return this.activeUser;
        }
    }

    public setActiveUser(user: User) {
        this.activeUser = user;
    }

    public getUserName(user: User): string {
        return user.email;
    }

    getUserEvents(): Array<Event> {
        if (this.getActiveUser().events != undefined) {
            return this.getActiveUser().events.filter(event => new Date(event.dateTo.toString().slice(0, event.dateTo.toString().indexOf("."))) >= new Date());
        }
        return new Array<Event>();
    }

    public getUser(email: string): User {
        return this.users.find(userFound => userFound.email == email);
    }

    public isPasswordCorrect(email: string, password: string): boolean {
        return this.users.find(userFound => (userFound.email == email && userFound.password == password)) != undefined;
    }

    public registerUser(email: string, password: string, firstName: string, lastName: string, registrationDate: Date, userType: any, interests?: string, phone?: string, address?: string): User {
        var phone = phone != "" ? phone : null;
        var address = address != "" ? address : null;
        var interests = interests != "" ? interests : null;
        var user: User = { email, password, firstName, lastName, registrationDate, phone, address, userType, interests };
        this.createUser(user);
        user.id = this.users[this.users.length-1].id;
        return user;
    }

    public interestedEvents() {
        if (this.activeUser.events != undefined)
            return this.activeUser.events.length;
    }

    public appliedEvents() {
        if (this.getActiveUser().events != undefined) {
            return this.getActiveUser().events.filter(event => !(new Date(event.dateTo.toString().slice(0, event.dateTo.toString().indexOf("."))) < new Date()));
        }
        return new Array<Event>();
    }
}