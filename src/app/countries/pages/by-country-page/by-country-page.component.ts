import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{
  constructor(private countriesSerices : CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesSerices.cashStore.byCountry.countries;
    this.initialValue = this.countriesSerices.cashStore.byCountry.term;
  }
  
  
  public countries : Country[] = []
  public initialValue: string = '';

  searchByCountry (term:string){
  
    this.countriesSerices.searchCountry(term)
    .subscribe( countries =>{
  
      this.countries = countries
  

    });
    
   
  }
}
