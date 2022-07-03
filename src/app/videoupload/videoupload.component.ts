import { Component } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-videoupload',
  templateUrl: './videoupload.component.html',
  styleUrls: ['./videoupload.component.css'],
})
export class VideouploadComponent {
  toFile: any;
  format: any;
  url: any;
  constructor(private uploadService: UploadService) {}

  ngOnInit() {
    console.log(this.toFile);
  }

  submit() {
    const file = this.toFile.item(0);
    this.uploadService.fileUpload(file);
  }

  onChange(event: any) {
    this.toFile = event.target.files;

    const file = event.target.files && event.target.files[0];
    console.log(file);
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      } else if (file.type.indexOf('video') > -1) {
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      };
    }
  }
}
