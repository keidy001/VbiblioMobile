import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url='http://localhost:8080/api';
  img='http://localhost:8080/api/livre/photo/';
  audiofile='http://localhost:8080/api/livre/audio';
  livrefile='http://localhost:8080/api/livre/livre';

  constructor(private http: HttpClient) { }

//Methode for add user
  add(data: any){
    return this.http.post(this.url+'/utilisateur/ajouter' ,data, {responseType:'text'});
  }

//Methode for user authentification

  login(login: string, password: string){
    return this.http.get(this.url+'/utilisateur/login?login='+login+'&password='+password);
  }

//  Methode for get book by format

  livreByFormat(format: string){
    return this.http.get(this.url+'/livre/livrebyformat/'+format);
  }

// Methode for get all books

  listLivre(){
    return this.http.get(this.url+'/livre/lister/');
  }

// Methode for get book by id

livreById(id: number){
  return this.http.get(this.url+'/livre/afficher/'+id);
}

//Methode for update user information

updateUser(id: any, data: any){
  this.http.put(this.url+'utilisateur/modifier'+id, data, {responseType:'text'});
}

// Methode for get User by his id
getUser(id){
  this.http.get(this.url+'utilisateur/afficher'+id);
}

//Methode for get all Articles and Memory
getDocument(id){
  this.http.get(this.url+'documents/lister');
}
}
