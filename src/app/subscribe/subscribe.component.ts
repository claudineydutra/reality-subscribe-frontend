import { JsonPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscribe } from '../interfaces/subscribe';
import { FileService } from '../services/file.service';
import { SubscribeService } from '../services/subscribe.service';

const MAX_SIZE: number = 5242880;
export class FileToUpload extends Blob{
  attachment: string = "";
}

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})

export class SubscribeComponent implements OnInit {

  @ViewChild('foto') foto: any;
  @ViewChild('video') video: any;

  selectedFiles: FileToUpload[] = [];

  constructor(private subscribeService: SubscribeService, private fileService: FileService) { }

  ngOnInit(): void {
  }

  subscriber: any = {
    nome: '',
    email: '',
    filesIds: [],
  };

  
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0].size < MAX_SIZE) {
        this.selectedFiles.push(event.target.files[0]);

      }
      else {
        alert("Arquivo: " + event.target.files[0].name + " é possui mais que 5mb");
        if(event.target.files[0].type.includes('image')){
          this.foto.nativeElement.value ='';
        }
        else{
          this.video.nativeElement.value ='';
        }
        }
      }
  }

  onSubmit(form: any){
    this.saveFiles(form);
  }

  createinscricao(form: any){
    this.subscriber.email = form.value.email;
    this.subscriber.nome = form.value.nome;
    this.subscribeService.create(this.subscriber).subscribe(
      error => {
      console.log(error);
    });
    alert('Inscrição realizada !!!')
    window.location.reload();
  }

  async saveFiles(form: any){
    let cont = 0;
    this.selectedFiles.forEach(  file =>{
      const formData = new FormData();
      formData.append('file', file);
      this.fileService.create(formData).subscribe((res) => {
        this.subscriber.filesIds.push(res.fileId);
        cont++;
        if(cont == 2){
          this.createinscricao(form);
        }
      });
         
    });
  }

}
