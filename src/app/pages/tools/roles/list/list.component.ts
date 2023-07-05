import { Component, ViewChild } from '@angular/core';
import { RolesService } from '../services/roles.service';
import { DataTableDirective } from 'angular-datatables';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  templateList:any = [];
  viewData :any;
  start : number = 0;
  filter : string = '';

  constructor( 
    private rolesService : RolesService,
    private router : Router,
    private commonService:CommonService
  ) { }

  ngOnInit(): void {
    const that = this;
    this.dtOptions = {
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search"
      },
      responsive: true,
      pageLength: 10,
      dom: '<"top"f>rt<"bottom"lip><"clear">',
      serverSide: true,
      processing: true,
      order: [[1, 'asc']],
      columnDefs: [
        { orderable: false, targets: [0,4] }
      ],
      ajax: (dataTablesParameters: any, callback) => {
        that.getPaginate(dataTablesParameters, callback);
      },
      columns: [
        { 
          data: 'RoleId',
          render: function(data: any, type: any, full: any, meta:any) {
            return that.start + meta.row + 1;
          }
        }, 
        { data: 'RoleNameinEn' }, 
        { data: 'isActive' }, 
        { data: 'CreatedAt' }, 
        { 
          data: 'RoleId',
          render: function(data: any, type: any, full: any) {
            return `
            <a href="javascript: void(0);" dt-id="${data}" dt-type="view" class="action-icon" data-bs-toggle="tooltip" title="view details"> <i class="mdi mdi-eye mp-eye"></i></a>
            <a href="javascript: void(0);" dt-id="${data}" dt-type="edit" class="action-icon" data-bs-toggle="tooltip" title="Edit"><i class="mdi mdi-pencil mp-pencil"></i></a>
            <a href="javascript: void(0);" dt-id="${data}" dt-type="delete" class="action-icon" data-bs-toggle="tooltip" title="Edit"><i class="mdi mdi-delete mp-pencil"></i></a>
            `;
          }
        }
      ]
    };  
    this.loadScripts();
  }

  editData (id:any) {
    this.router.navigate(['roles', 'edit', id]);
  }

  getData (id:any) {
    this.router.navigate(['roles', 'view', id]);
  }

  deleteData (id:any) {
    let alertData = {
      title: 'Confirm Delete',
      message: 'Are you sure to delete this record?',
      showCancelButton: true,
      confirmButtonText: 'OK',
      denyButtonText: 'NO',
      confirmCallback: ()=>{
        this.rolesService.delete(id,(response:boolean)=>{
          if(response)
            this.dtRerender();
        });
      },
      denyCallback: ()=>{
        console.log('denied button pressed..');
      }
    };
    this.commonService.customAlert(alertData);

    
  }

  loadScripts(){
    $(document).on('click', '#et-dt td a.action-icon', ($event) => {
      let id = $($event.currentTarget).attr('dt-id');
      let type = $($event.currentTarget).attr('dt-type');
      if(type === 'edit')
        this.editData(id);
      else if(type === 'view')
        this.getData(id);
      else if(type === 'delete')
        this.deleteData(id);
    });
    
  }


  getPaginate(paginate:any, callback:any){
    this.start = paginate.start;
    this.filter = paginate.search.value;
    this.rolesService.paginate(paginate,(response:any)=>{
      this.templateList = response.data;
      callback({
        recordsTotal: response.recordsTotal,
        recordsFiltered: response.recordsFiltered,
        data: this.templateList
      });
    }); 
  }

  dtRerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  exportFile(type:string='xlsx'){
    let postData = {
      select : [
        ["RoleNameinEn", "RoleName"],
        ["IsActive", "Active"],
        ["CreatedAt", "Created Date"],
        ["UpdatedAt", "Updated Date"]
      ],
      filter : this.filter
    };
    this.rolesService.exportElsx(postData,(response:boolean)=>{
      if(response)
        console.log("Exported");
    }, type); 
  }

  exportPdf(){
    let postData = {
      select : [
     ["RoleNameinEn", "RoleName"],
     ["IsActive", "Active"],
     ["CreatedAt", "Created Date"],
     ["UpdatedAt", "Updated Date"]
      ],
      filter : this.filter
    };
    this.rolesService.exportPdf(postData,(response:boolean)=>{
      if(response)
        console.log("Exported");
    }); 
  }
}





// what is array map,filter,findindex,reduce  code example 
