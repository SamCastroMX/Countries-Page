import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })

export class CountriesService {
    private apiUrl: string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }


    searchCountryByAlphaCode(code: string): Observable<Country | null> {

        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
            .pipe(
                map(countries => countries.length>0 ? countries[0] : null),
                tap(countries => console.log('by capital', countries)),
                catchError(error => of(null))
            )

    }

    searchCapital(term: string): Observable<Country[]> {

        return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
            .pipe(
                tap(countries => console.log('by capital', countries)),
                catchError(error => of([]))
            )

    }

    searchCountry(term: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
            .pipe(
                tap(countries => console.log('by country', countries)),
                catchError(error => of([])))
    }

    searchRegion(item: string): Observable<Country[]> {

        return this.http.get<Country[]>(`${this.apiUrl}/region/${item}`)
            .pipe(
                tap(countries => console.log('by region', countries)),
                catchError(error => of([]))
            )
    }



}

