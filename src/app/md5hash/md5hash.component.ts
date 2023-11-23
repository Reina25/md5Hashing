import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { hash } from '../model/hash';
import { NgForm } from '@angular/forms';
import { Md5 } from 'ts-md5';


@Component({
  selector: 'app-md5hash',
  templateUrl: './md5hash.component.html',
  styleUrls: ['./md5hash.component.css']
})
export class Md5hashComponent implements OnInit {

  constructor(private route: ActivatedRoute){

  }

  studentID:string=this.route.snapshot.queryParamMap.get("studentid");
  eventID:string=this.route.snapshot.queryParamMap.get("eventid");
  hash:any=this.route.snapshot.queryParamMap.get("hash");
  hash2:any;

  salt:string="salt";

  hashingsuccess:boolean=null;

  hashform: NgForm;
  md5 = new Md5();

  submitted:boolean;

    // this.studentID = this.route.snapshot.queryParamMap.get("studentid");
    // this.eventID = this.route.snapshot.queryParamMap.get("eventid");
    // this.hash = this.route.snapshot.queryParamMap.get("hash");



  ngOnInit() {
    
   
    // console.log(completedata);
  

  }
hashmodel = new hash(this.route.snapshot.queryParamMap.get("studentid"), this.route.snapshot.queryParamMap.get("eventid"),this.route.snapshot.queryParamMap.get("hash"),'new hash');
  
  onSubmit(hash: {studentid:string,eventid:string, hash:any,hash2:any}){
    this.submitted=true;
    const completedata : string= this.studentID+this.eventID+this.salt;
    this.md5.appendStr(completedata);
    this.hash2=this.md5.end();

    if(this.hash == this.hash2){
      this.hashingsuccess=true;

    }else{
      this.hashingsuccess=false;
    }

        
    

   
 
    
    
  }


}
