import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-cap',
  templateUrl: './image-cap.component.html',
  styleUrls: ['./image-cap.component.css']
})
export class ImageCapComponent implements OnInit {

  @Input() source;
  @Input() titleMovie;
  constructor() { }

  ngOnInit(): void {
  }

  
}
