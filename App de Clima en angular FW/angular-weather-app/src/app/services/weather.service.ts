import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  apiKey: string = "efd10b16d51ea7b9182bb14eef1fa0fa";
  URI: string = "";

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string, countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }
}
