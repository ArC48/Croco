import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http'
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    constructor(private _http: HttpClient) {}

    //get all the users by get request to the api with /users endpoint
    getUsers() {
        return this._http.get<any>('https://jsonplaceholder.typicode.com/users')
        .pipe(map((res: any) => {
            return res;
        }))
    }
    //get the user info with a specific id
    getUserId(id: number) {
        return this._http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .pipe(map((res: any) => {
            return res
        }))
    };

    //same request method, different endpoint (/posts) as we want to get the posts of a specific user.
    getUserPosts(id: number) {
        return this._http.get<any>(`https://jsonplaceholder.typicode.com/posts?postId=${id}`)
        .pipe(map((res: any) => {
            return res
        }))
    }
}