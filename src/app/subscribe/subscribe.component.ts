import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  subscriber: any ={
    fullname: "",
    email: "",
    photoFile: Set<File>,
    videoFile: Set<File>
  }

  onSubmit(form: any){
    console.log(form.value)
  }

}
