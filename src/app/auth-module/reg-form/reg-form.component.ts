import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TableService } from '../table/table.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  regForm: FormGroup;
  tableId: any;
  isEdit: boolean
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tableService: TableService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.createForm();
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log('paramMap: ', params.get('id'));
      if (params.has('id')) {
        this.isEdit = true
        this.tableId = parseInt(params.get('id'));
        console.log('tableId: ', this.tableId);

        const formData = this.tableService.findRecord(this.tableId);
        console.log('formData: ', formData);

        this.regForm.patchValue(formData);
      }
    })
  }
  createForm() {
    this.regForm = this.fb.group({
      name: [null],
      city: [null],
      phone: [null],
      email: [null]
    });
  }
  submit() {
    if (this.tableId || this.tableId === 0) {
      this.tableService.updateRecord(this.regForm.getRawValue(), this.tableId);
      this.router.navigate(['./../table'], { relativeTo: this.activatedRoute });
      return;
    }
    this.tableService.saveRecord(this.regForm.getRawValue());
    this.router.navigate(['./../table'], { relativeTo: this.activatedRoute });
  }

}
