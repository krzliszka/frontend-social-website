import { Component, OnInit } from '@angular/core';
import { SubsocialModel } from 'src/app/subsocial/subsocial-response';
import { SubsocialService } from 'src/app/subsocial/subsocial.service';

@Component({
  selector: 'app-subsocial-side-bar',
  templateUrl: './subsocial-side-bar.component.html',
  styleUrls: ['./subsocial-side-bar.component.css']
})
export class SubsocialSideBarComponent implements OnInit {

  subsocials: Array<SubsocialModel> = [];
  displayViewAll!: boolean;

  constructor(private subsocialService: SubsocialService) { 
    this.subsocialService.getAllSubsocials().subscribe(data => {
      if (data.length >= 4) {
        this.subsocials = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subsocials = data;
      }
    });
  }

  ngOnInit(): void {
  }

}
