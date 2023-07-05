import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { ExportExcelService } from 'src/app/services/export-excel.service';
import { ExportPdfService } from 'src/app/services/export-pdf.service';

@Injectable({
  providedIn: 'root'
})
export class MailTemplateService {

  constructor(
    private apiService : ApiService,
    private spinner : NgxSpinnerService, 
    private toastrService: ToastrService,
    private exportExcelService:ExportExcelService,
    private exportPdfService:ExportPdfService
  ) { }

  paginate(postData:any, callBackStatus:any){
    this.apiService.paginateEmailTemplate(postData).subscribe((response)=>{
      if(response?.statusCode == 200){
        callBackStatus(response.data);
        return;
      }
      this.toastrService.error(response.message);
      callBackStatus(response.data);
    });
  }

  create(postData:any, callBackStatus:any){
    this.spinner.show();
    this.apiService.createEmailTemplate(postData).subscribe((response)=>{
      if(response?.statusCode == 200){
        this.spinner.hide();
        this.toastrService.success(response.message);
        callBackStatus(true);
        return;
      }
      this.spinner.hide();
      this.toastrService.error(response.message);
      callBackStatus(false);
      
    });
  }

  update(id:number, postData:any, callBackStatus:any){
    this.spinner.show();
    this.apiService.updateEmailTemplate(id, postData).subscribe((response)=>{
      if(response?.statusCode == 200){
        this.spinner.hide();
        this.toastrService.success(response.message);
        callBackStatus(true);
        return;
      }
      this.spinner.hide();
      this.toastrService.error(response.message);
      callBackStatus(false);
    });
  }

  delete(id:number, callBackStatus:any){
    this.spinner.show();
    this.apiService.deleteEmailTemplate(id).subscribe((response)=>{
      if(response?.statusCode == 200){
        this.spinner.hide();
        this.toastrService.success(response.message);
        callBackStatus(true);
        return;
      }
      this.spinner.hide();
      this.toastrService.error(response.message);
      callBackStatus(false);
    });
  }

  view(id:number, callBackStatus:any){
    this.spinner.show();
    this.apiService.getEmailTemplate(id).subscribe((response)=>{
      if(response?.statusCode == 200){
        this.spinner.hide();
        this.toastrService.success(response.message);
        callBackStatus(response);
        return;
      }
      this.spinner.hide();
      this.toastrService.error(response.message);
      callBackStatus(response);
    });
  }

  exportElsx(postData:any, callBackStatus:any, type="csv"){
    this.spinner.show();
    this.apiService.getAllEmailTemplates(postData).subscribe((response:any)=>{
      if(response?.statusCode == 200){
        this.exportExcelService.exportExcel({title:"Email Templates", data : response.data, type});
        this.spinner.hide();
        callBackStatus(true);
        return;
      }
      this.spinner.hide();
      this.toastrService.error(response.message);
      callBackStatus(false);
    });
  }

  exportPdf(postData:any, callBackStatus:any){
    this.spinner.show();
    this.apiService.getAllEmailTemplates(postData).subscribe((response:any)=>{
      if(response?.statusCode == 200){
        this.exportPdfService.exportPdf({title:"Email Templates", data : response.data});
        this.spinner.hide();
        callBackStatus(true);
        return;
      }
      this.spinner.hide();
      this.toastrService.error(response.message);
      callBackStatus(false);
    });
  }
}
