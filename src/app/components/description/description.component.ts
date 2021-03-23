import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() source;
  @Input() resume;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {

  }

}
