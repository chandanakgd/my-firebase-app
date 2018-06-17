import { Injectable } from '@angular/core';
import {AngularFireAuth,AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabase,AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestore,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import {User} from './user';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AfService {
  user$: Observable<firebase.User>;
  hide:boolean=false;
  constructor(public afAuth:AngularFireAuth,
              public afs:AngularFirestore,private router:Router) {
    this.user$=afAuth.authState.switchMap(user=>{
      if(user){
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      }else{
        return Observable.of(null);
      }
    });
    // console.log(this.afs.doc<User>(`users/${user.uid}`).valueChanges());
  }
  loginWithGoogle(){
    const provider= new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((credential)=>{
      this.updateUser(credential.user);
    });
    this.hide=true;
  }
  updateUser(user){
    const userRef:AngularFirestoreDocument<any>=this.afs.doc(`users/${user.uid}`);
    const data:User={
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      photoURL:user.photoURL,
      roles:{
        subscriber:true,
      }
    }
    return userRef.set(data,{merge:true})
  }
  logout(){
    this.afAuth.auth.signOut();
    this.hide=false;
    this.router.navigate(['/login']);
  }
}
