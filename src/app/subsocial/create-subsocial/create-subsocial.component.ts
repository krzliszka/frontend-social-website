import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubsocialModel } from '../subsocial-response';
import { Router } from '@angular/router';
import { SubsocialService } from '../subsocial.service';

@Component({
  selector: 'app-create-subsocial',
  templateUrl: './create-subsocial.component.html',
  styleUrls: ['./create-subsocial.component.css']
})
export class CreateSubsocialComponent implements OnInit {
  createSubsocialForm: FormGroup;
  subsocialModel!: SubsocialModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private subsocialService: SubsocialService) {
    this.createSubsocialForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subsocialModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubsocial() {
    this.subsocialModel.name = this.createSubsocialForm.get('title')?.value;
    this.subsocialModel.description = this.createSubsocialForm.get('description')?.value;
    this.subsocialService.createSubsocial(this.subsocialModel).subscribe(data => {
      this.router.navigateByUrl('/list-subsocials');
    }, error => {
      console.log('Error occurred');
    })
  }
}