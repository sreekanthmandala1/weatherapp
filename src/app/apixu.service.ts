import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http:HttpClient) { }

  getWeather(location){
    return this.http.get('api.openweathermap.org/data/2.5/weather?q={london}&appid={2f8c7cc7d0f60c8322b8a91534ffe4c1}');
  }
}
