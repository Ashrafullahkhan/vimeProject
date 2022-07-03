import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import S3 from 'aws-sdk/clients/s3';
@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor() {}
  fileUpload(file: any) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: 'AKIAYUZD7WAU43IWH5OS',
      secretAccessKey: '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',
      region: 'us-east-1',
    });
    const params = {
      Bucket: 'njvideo-error/fiverr',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
    };
    bucket.upload(params, function (err: any, data: any) {
      if (err) {
        console.log('EROOR: ', JSON.stringify(err));
        return false;
      }
      console.log('File Uploaded.', data);
      return true;
    });
  }
}
