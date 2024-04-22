import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrahmiUploadService {

  private uploadUrl = 'http://localhost:8087/cloud/upload';

  constructor(private http: HttpClient) { }


  // uploadFile(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();
  //   formData.append('image', file);
  //   const req = new HttpRequest('POST', "http://localhost:8085/cloud/upload", formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });
  //   return this.http.request(req);
  // }
  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('image', file, file.name);
    
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    
    return this.http.post<any>(this.uploadUrl, formData, { headers: headers });
  }

  }
