import { Component, OnInit } from '@angular/core';
import { SubsocialModel } from '../subsocial-response';
import { SubsocialService } from '../subsocial.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-subsocials',
  templateUrl: './list-subsocials.component.html',
  styleUrls: ['./list-subsocials.component.css']
})
export class ListSubsocialsComponent implements OnInit {

  subsocials!: Array<SubsocialModel>;
  
  constructor(private subsocialService: SubsocialService) { }

  ngOnInit() {
    this.subsocialService.getAllSubsocials().subscribe(data => {
      this.subsocials = data;
    }, error => {
      throwError(error);
    })
  }
}