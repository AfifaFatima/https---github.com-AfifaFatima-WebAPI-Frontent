import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment, headers } from '../environments/environment';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { saveAs } from "file-saver";
import e from 'cors';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  UploadPDF(file: File) {
    const formData = new FormData();
    formData.append('File', file, file.name);
    var url = environment.baseURLNew + "api/UploadDocument/UploadDocumentPDF";
    let res = this.http.post(url, formData);
    return res;
  }
  //  DownloadPDF(id: any) {
  //    var url = environment.baseURLNew + "/api/UploadDocument/GetDownloadPDF?fileName=&id=";
  //  let res = this.http.get(url, { headers: headers });
  //    return res;
  //  }

  downloadPdf(fileName: string , id: any): Observable<Blob> {
    const url = environment.baseURLNew+"api/UploadDocument/GetDownloadPDF?fileName=" + fileName + "&id=" + id ;
    let res = this.http.get(url, { headers: headers , responseType: 'blob'});
    return res;
  }

  GetAllPDF(): Observable<any> {
    var url = environment.baseURLNew + "api/UploadDocument/GetDocument";
    let res = this.http.get(url, { headers: headers });
    return res;
  }

}
