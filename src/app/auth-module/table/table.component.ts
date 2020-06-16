import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableDate;

  constructor(
    private tableService: TableService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tableDate = this.tableService.tableData
  }
  edit(index: number) {
    console.log("index ", index);
    this.router.navigate(['./../', index], { relativeTo: this.activatedRoute });
  }
  delete(index: number) {
    this.tableService.deleteRecord(index);
  }

}
