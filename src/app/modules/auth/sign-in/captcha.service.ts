import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Captcha } from '../sign-in/captcha.interface';

@Injectable({
    providedIn: 'root',
})
export class CaptchaService {

    private http = inject(HttpClient);

    //apiUrl = environment.apiUrl;
    url = environment.url;

    constructor() {}

    getCaptcha(): Observable<Captcha> {
        return this.http.post<Captcha>(`${this.url}captchae/api/`, {});
    }
}
