import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";
@Component({
  selector: 'app-grid-one',
  templateUrl: './grid-one.component.html',
  styleUrls: ['./grid-one.component.css']
})
export class GridOneComponent implements OnInit {
  public weatherSearchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: { location: any; }) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => console.log(data));
  }
}
