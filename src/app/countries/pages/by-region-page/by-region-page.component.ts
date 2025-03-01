import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  constructor(private countriesSerices : CountriesService) {

  
  }
  
  
  public countries : Country[] = []
  
  searchByRegion (term:string){
  
    this.countriesSerices.searchRegion(term)
    .subscribe( countries =>{
  
      this.countries = countries

    });
    
   
  }
}
