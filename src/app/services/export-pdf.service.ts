import { Injectable } from '@angular/core';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class ExportPdfService {

  constructor() { }

  exportPdf(pdfData: { title: any; data: any;}) {
    const title = pdfData.title;
    const data = pdfData.data;
    const header:any = (data[0])?Object.keys(data[0]):[];
    let rows:any = [];
    data.forEach((d: any) => {
      rows.push(Object.values(d));
    });
    const doc = new jsPDF({
      orientation: 'p', // p | l
      unit: 'mm',
      format: 'a4'
    });
    
    autoTable(doc, {
      styles: { fontSize: 9, cellPadding: 2 }, // halign: 'left'|'center'|'right' = 'left'
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
      head: [header],
      body: rows,
      didDrawCell: (data) => { 
        // console.log(data);
      }
    });

    doc.save(title+".pdf");
  }
}
