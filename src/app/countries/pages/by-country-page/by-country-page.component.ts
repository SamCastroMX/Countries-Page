import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  constructor(private countriesSerices : CountriesService) {

  
  }
  
  
  public countries : Country[] = []
  
  searchByCountry (term:string){
  
    this.countriesSerices.searchCountry(term)
    .subscribe( countries =>{
  
      this.countries = countries
  

    });
    
   
  }
}
