import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('mechanic_random_user_diego', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['admin/panel']);
    } catch(error) {
       throw new Error(error)
    }

}

async logout(){
  await this.afAuth.signOut();
  localStorage.removeItem('mechanic_random_user_diego');
  this.router.navigate(['admin/login']);
}

get isLoggedIn(): boolean {
  const  user = JSON.parse(localStorage.getItem('mechanic_random_user_diego'));
  return  user !== null;
}
}
