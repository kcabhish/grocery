import { Injectable,Input, Output, EventEmitter } from '@angular/core';

@Injectable()

export class roomateService{
    roomateArray=[];
    constructor(){}
    addRoomate=(roomate)=>{
        this.roomateArray.push(roomate);
        console.log("roomateAdded");
        console.log(this.roomateArray);
    }
}
