import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IProbabilityRequest} from './probability-calculator.interfaces'

@Injectable({
  providedIn: 'root'
})
export class ProbabilityCalculatorService {
  configDomain = 'https://localhost:7211/api';
  
  constructor(private http: HttpClient) { }

  getProbability(request: IProbabilityRequest) {    
    const configUrl =  
    `${this.configDomain}/ProbabilityCalculator/Probability/${request.probabilityType}?probabilityA=${request.probabilityA}&probabilityB=${request.probabilityB}`;
    return this.http.get(configUrl);
  }
}
