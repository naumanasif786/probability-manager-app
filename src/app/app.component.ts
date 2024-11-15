import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProbabilityCalculatorService } from './probability-calculator.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProbabilityRequest } from './probability-calculator.interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {

  probabilityResult: any 
 
  constructor(private svc: ProbabilityCalculatorService) {
  }
 
  probabilityForm = new FormGroup({
    probabilityA: new FormControl(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
    probabilityB: new FormControl(undefined,  [Validators.required, Validators.min(0), Validators.max(1)]),
    probabilityType: new FormControl('CombinedWith', Validators.required) 
  });

  get PA() {
    return this.probabilityForm.get('probabilityA');
  } 

  get PB() {
    return this.probabilityForm.get('probabilityB');
  } 

  title = 'probability-manager-app';

  getProbability(request: IProbabilityRequest) {
    this.svc.getProbability(request).subscribe(result => {
      this.probabilityResult = result
    });
  } 

  onSubmit() {
    if (this.probabilityForm.valid) {
      this.getProbability({
        probabilityA: Number(this.probabilityForm.value.probabilityA),
        probabilityB: Number(this.probabilityForm.value.probabilityB),
        probabilityType: this.probabilityForm.value?.probabilityType ??  'CombinedWith'
      })
    } 
   
   
  }

}
