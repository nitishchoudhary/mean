import { Message } from "./message.model";
import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { error } from "util";

@Injectable()
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http){}

    addMessage(message: Message){
        this.messages.push(message);
        const body = JSON.stringify(message);
        const url = 'http://localhost:3000/message';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(url, body, options)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
        
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }

    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    } 
}

