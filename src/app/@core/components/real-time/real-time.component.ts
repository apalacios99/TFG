import { Component, OnInit } from '@angular/core';
import { FirestoreService} from '../../services/firestore/firestore.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import {map} from 'rxjs/operators';
import {SensorData} from '../../interfaces/sensor-data';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.scss']
})
export class RealTimeComponent implements OnInit {

  constructor(private firestoreService: FirestoreService, private modalService: NgbModal,
                private datePipe: DatePipe) { }
  // CO2
  CO2barChartOptions;
  CO2barChartLabels = [];
  CO2barChartData;
  CO2maxLimit = 800;
  CO2minLimit = 400;
  CO2minValue = 0;
  CO2maxValue = 0;
  CO2midValue = '0';
  CO2Max = 1000;

  chartType: string = 'line';
  barChartLegend = true;

  sensorData: Array<SensorData> = [];
  modalSize = 190;
  ngOnInit(): void {
    this.initValuesCO2();
    this.readFireBaseData();
  }

  initValuesCO2(){
    this.CO2barChartData =[
      {data: [], label: 'CO2', fill: false, borderColor: '#212121',pointRadius: 0, borderWidth: 1.5},
      {data: [], label: 'Limite superior', fill: false, borderColor: '#b71c1c',pointRadius: 0, borderWidth: 0.5},
      {data: [], label: 'Limite ' , fill: false, borderColor: '#b71c1c',pointRadius: 0, borderWidth: 0.5},
    ];

    this.CO2barChartOptions= {
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            max: this.CO2Max,
            min: 400,
            stepSize: 100
          }
        }],
        xAxes: [{
          type: 'time',
        }]
      }
    };
  }

  openModal(modal){
    if (window.innerWidth <= 700){
      this.modalSize = 300;
    } else {
      this.modalSize = 190;
    }
    this.modalService.open(modal, {backdropClass: 'light-grey-backdrop', centered: true, windowClass : "ng-modal", size: 'xl'});
  }

  readFireBaseData(){
    let date = this.datePipe.transform(new Date((new Date()).getTime() -(60*60*1000)), 'yyyy-MM-ddTHH:mm:ss');

    const collection = this.firestoreService.getSensorData(date);
    collection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    ).subscribe((sensorData: Array<SensorData>) => {
      // Lo ordeno por la fecha
      sensorData.sort((a,b) => a.fechaHora.localeCompare(b.fechaHora))
      if (sensorData.length != 0){
        sensorData.forEach(e => this.sensorData.push(e));
        this.calculateMinMedMaxValues(this.sensorData);
        this.graphicData(sensorData, collection);
      }
    });
  }

  graphicData(sensorData: Array<SensorData>, collection){
    sensorData.forEach(e => {
      this.CO2barChartData[0].data.push(e.eco2);
      this.CO2barChartData[1].data.push(this.CO2maxLimit);
      this.CO2barChartData[2].data.push(this.CO2minLimit);
      this.CO2barChartLabels.push( e.fechaHora.replace("Z", "") );

      collection.doc( `${e.id}`).delete().catch(error => {console.log(error); });
    });
  }

  calculateMinMedMaxValues(sensorData: Array<SensorData>){
    let maxValue = sensorData[0].eco2;
    let minValue  = sensorData[0].eco2;
    let sumValue  = 0;
    sensorData.forEach(e => {
      if (e.eco2 > maxValue){
        maxValue = e.eco2;
      }
      if (e.eco2 < minValue){
        minValue = e.eco2;
      }
      sumValue += e.eco2;
    });
    this.CO2maxValue = maxValue;
    this.CO2minValue = minValue;
    this.CO2midValue = (Math.round((sumValue / sensorData.length + Number.EPSILON) * 100) / 100).toFixed(2);
  }

  saveGraphicImg(element, name) {
    html2canvas(element, {scrollY: -window.scrollY, scrollX: -window.scrollX}).then(canvas => {
      const a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = name + "graphic" + this.datePipe.transform(new Date(), 'yyyyMMdd') +  '.jpg';
      a.click();
    });
  }

  saveGraphicPdf(element, name) {
    html2canvas(element, {scrollY: -window.scrollY, scrollX: -window.scrollX}).then(canvas => {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth() - 40;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 18, 20, pdfWidth, pdfHeight);
      pdf.save(name +"graphic" + this.datePipe.transform(new Date(), 'yyyyMMdd') + ".pdf");
    });
  }
}
