import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../auth/user.service';

export interface Event {
    id?: number;
    name: string;
    dateFrom: Date;
    dateTo: Date;
    eventType: 'SPORT' | 'KONCERT' | 'KLUB' | 'PRIRODA';
    rating?: number;
    location: string;
    description: string;
    attendance: number;
}

@Injectable()
export class EventService {

    apiURL: string = "http://localhost:8181/events";
    private events: Array<Event>;
    private activeEvent: Event;

    constructor(private httpClient: HttpClient, private userService: UserService) {
        this.getEventsAPI().subscribe((events: Event[]) => {
            this.events = events;
        }, (err) => {
            console.log(err);
        });
    }

    public createEvent(event: Event) {
        this.httpClient.post(`${this.apiURL}/save`, event).subscribe((event: Event) => this.events.push(event));;
    }

    public updateEvent(event: Event) {
        let index = this.events.indexOf(this.getEvent(event.id));
        this.events[index] = event;
        this.httpClient.put(`${this.apiURL}/update`, event).subscribe((event: Event) => this.activeEvent = event);
    }

    private deleteEvent(id: number) {
        return this.httpClient.delete(`${this.apiURL}/delete/${id}`);
    }

    private getEventById(id: number): Observable<Event> {
        return this.httpClient.get<Event>(`${this.apiURL}/id/${id}`);
    }

    private getEventsAPI(): Observable<Event[]> {
        return this.httpClient.get<Event[]>(`${this.apiURL}/all`);
    }

    public getEvents(): Array<Event> {
        return this.events;
    }

    public getActiveEvent() {
        if (this.activeEvent != undefined) {
            return this.activeEvent;
        }
    }

    public setActiveEvent(event: Event) {
        this.activeEvent = event;
    }

    public registerEvent(name: string, dateFrom: Date, dateTo: Date, eventType: any, location: string, description: string, attendance: number, rating?: number) {
        var id = this.events.length;

        var event: Event = {
            id: id, name: name, eventType: eventType, location: location, description: description, attendance: attendance,
            dateFrom: dateFrom, dateTo: dateTo, rating: rating
        };
        this.createEvent(event);
        return true;
    }

    public getEvent(id: number): Event {
        return this.events.find(eventFound => eventFound.id == id);
    }

    public getNewEvents(): Array<Event> {
        if (this.userService.getActiveUser().events != undefined && this.userService.getActiveUser().events != null) {
            const result = this.events.filter(event => !this.userService.getActiveUser().events.some(userEvent => event.id == userEvent.id));
            return result.filter(event => !this.getFinishedEvents().some(finishedEvent => event.id == finishedEvent.id));
        }
        return new Array<Event>();
    }

    public getFinishedEvents(): Array<Event> {
        return this.events.filter(event => new Date(event.dateTo.toString().slice(0, event.dateTo.toString().indexOf("."))) < new Date());
    }

    public getInterestingEvents(): Array<Event> {
        if (this.userService.getActiveUser() != undefined && this.userService.getActiveUser() != null)
            return this.getInterestEvents();
    }

    public getInterestEvents(): Array<Event> {
        var search = this.userService.getActiveUser().interests != undefined ? this.userService.getActiveUser().interests.toLowerCase() : '';
        const result = this.getNewEvents().filter(event => event.description.toLowerCase().includes(search) ||
            search.includes(event.eventType.toLowerCase()) || event.location.toLowerCase().includes(search) ||
            event.name.includes(search) || search.includes(event.location) || search.includes(event.name));
        if (result.length > 4) {
            var randomResult: Array<Event> = [];
            for (var i = 0; i < 4; i++) {
                randomResult.push(result[Math.floor(Math.random() * result.length)]);
            }
            return randomResult;
        } else {
            return result;
        }
    }
}