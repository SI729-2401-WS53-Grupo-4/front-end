import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Route, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SignInRequest} from "../model/sign-in.request";
import {SignInResponse} from "../model/sign-in.response";
import {environment} from "../../../../../environments/environment";
import {SignUpRequest} from "../model/sign-up.request";
import {SignUpResponse} from "../model/sign-up.response";

@Injectable({providedIn: 'root'})
export class AuthenticationServices{
  basePath: string = `${environment.serverBasePath}`;
  httpOptions = {headers: new HttpHeaders({'Content-type': 'application/json'})};
  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router, private http: HttpClient) {}

  get isSignedIn() {return this.signedIn.asObservable();}
  get currentUserId() { return this.signedInUserId.asObservable();}
  get currentUsername(){return this.signedInUsername.asObservable();}

  signUp(signUpRequest:SignUpRequest){
    return this.http.post<SignUpResponse>(`${this.basePath}/authentication/sign-up`,signUpRequest,this.httpOptions)
      .subscribe({
        next: (response) =>{
          console.log(`Signed up as ${response.username} with id: ${response.id}`);
          this.router.navigate(['/login']).then();
        },
        error: (error) =>{
          console.error(`Error while signing up: ${error}`);
          this.router.navigate(['/register']).then();
        }
      });
  }

  signIn(signInRequest:SignInRequest){
    console.log(signInRequest);
    return this.http.post<SignInResponse>(`${this.basePath}/authentication/sign-in`,signInRequest,this.httpOptions)
      .subscribe({
        next: (response) =>{

          this.signedIn.next(true);
          this.signedInUserId.next(response.id);
          this.signedInUsername.next(response.username);
          localStorage.setItem('token',response.token);
          console.log(`Signed in as ${response.username} with token ${response.token}`);
          this.router.navigate(['/']).then();
          },
        error:(error) =>{
          this.signedIn.next(false);
          this.signedInUserId.next(0);
          this.signedInUsername.next('');
          console.error(`Error while signing in: ${error}`);
          this.router.navigate(['/login']).then();
        }
      });
  }

  signOut(){
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInUsername.next('');
    localStorage.removeItem('token');
    this.router.navigate(['/login']).then();
  }


}
