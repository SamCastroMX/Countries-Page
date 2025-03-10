import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  constructor(private countriesSerices : CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesSerices.cashStore.byRegion.countries;
    this.selectedRegion = this.countriesSerices.cashStore.byRegion.region;
  }
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
