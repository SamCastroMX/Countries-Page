import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cahce-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })

export class CountriesService {
    private apiUrl: string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { 
        this.loadFromLocalStorage();
    }

    private saveToLocalStorage(){
        localStorage.setItem('cacheStore', JSON.stringify(this.cashStore))
    }

    private loadFromLocalStorage(){
        if(!localStorage.getItem('cacheStore')) return;
        
        console.log(localStorage.getItem('cacheStore'))
        this.cashStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }

    public cashStore: CacheStore  = {
        byCapital: { term: '', countries: [] },
        byCountry: { term: '', countries: [] },
        byRegion: { region: '', countries: [] }
    }

    private getCountriesRequest(url: string): Observable<Country[]> {

        return this.http.get<Country[]>(url)
            .pipe(
                catchError(error => of([])),

            )

    }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {

        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                tap(countries => console.log('by capital', countries)),
                catchError(error => of(null))
            )

    }

    searchCapital(term: string): Observable<Country[]> {

        const url = `${this.apiUrl}/capital/${term}`;
        return this.getCountriesRequest(url)
        .pipe(
            tap((countries) => this.cashStore.byCapital = {term, countries}),
            tap(()=> this.saveToLocalStorage()),
        )

    }

    searchCountry(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${term}`;
        return this.getCountriesRequest(url)
        .pipe(
            tap(countries => this.cashStore.byCountry = {term,countries}),
            tap(()=> this.saveToLocalStorage()),

        )
    }

    searchRegion(term: Region): Observable<Country[]> {

        const url = `${this.apiUrl}/region/${term}`;
        return this.getCountriesRequest(url)
        .pipe(
            tap(countries => this.cashStore.byRegion = {region:term,countries}),
            tap(()=> this.saveToLocalStorage()),
        )
    }



}

