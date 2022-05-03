import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    constructor(private _http: HttpClient) {}

    getUsers() {
        return this._http.get<any>('https://jsonplaceholder.typicode.com/users')
        .pipe(map((res: any) => {
            return res;
        }))
    }

    getUserId(id: number) {
        return this._http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .pipe(map((res: any) => {
            return res
        }))
    };

    getUserPosts(id: number) {
        return this._http.get<any>(`https://jsonplaceholder.typicode.com/posts?postId=${id}`)
        .pipe(map((res: any) => {
            return res
        }))
    }
}