import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})

export class ByCapitalPageComponent  implements OnInit{

  constructor(private countriesSerices: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesSerices.cashStore.byCapital.countries;
    this.initialValue = this.countriesSerices.cashStore.byCapital.term;

  }

  public isLoading: boolean = false;
  public countries: Country[] = []
  public initialValue: string = '';

  searchByCapital(term: string) {

    this.isLoading = true;
    this.countriesSerices.searchCapital(term)
      .subscribe(countries => {

        this.countries = countries

        this.isLoading = false;
      });


  }

}
