import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  constructor(private countriesSerices : CountriesService) {}
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public countries : Country[] = []
  public selectedRegion? : Region;
  
  searchByRegion (term:Region){
  
    this.selectedRegion = term;
    this.countriesSerices.searchRegion(term)
    .subscribe( countries =>{
  
      this.countries = countries

    });
    
   
  }
}
