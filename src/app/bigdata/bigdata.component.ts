import { Component, OnInit } from '@angular/core';
import { NgxEchartsService } from 'ngx-echarts';
@Component({
  selector: 'app-bigdata',
  templateUrl: './bigdata.component.html',
  styleUrls: ['./bigdata.component.css']
})
export class BigdataComponent implements OnInit {

  constructor(private nes: NgxEchartsService) { }

  ngOnInit() {

  }

}
