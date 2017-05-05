import { Component, OnInit } from '@angular/core';
import { TableauService } from '../tableau.service';
import { DomSanitizer } from '@angular/platform-browser';
declare var tableauSoftware: any;
@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
    
    tableau: any = [];
    token: any = [];
    viz: any;
    workbook: any;
    sheet: any;
    options: any;
    url:any;


  constructor(private tableauService: TableauService,public sanitizer: DomSanitizer) { }

  ngOnInit() {
    // Retrieve posts from the API
   
    this.tableauService.getAllPosts().subscribe(tableau => {
        this.initViz(tableau.test);
        this.tableau = tableau;  
	  });
    this.tableauService.getAuthToken().subscribe(token => {
        this.token = token;  
	  });
     
  
  }
  initViz(url){
    var containerDiv = document.getElementById("vizContainer"); 
	this.viz = new tableauSoftware.Viz(containerDiv, url, {hideToolbar: true});
   
  }
  changeFilter(filter) {
	this.viz.getWorkbook().getActiveSheet().applyFilterAsync("College",filter.target.value,tableauSoftware.FilterUpdateType.REPLACE);
  }
}
