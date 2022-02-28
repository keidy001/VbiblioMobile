import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url='http://localhost:8080/api';
  img='http://localhost:8080/api/livre/photo/';
  livrefile='http://localhost:8080/api/livre/livre';
  constructor(private http : HttpClient) { }


  add(data :any){
    return this.http.post(this.url+"/utilisateur/ajouter" ,data, {responseType:"text"})
  }

  login(login :String,password : String){
    return this.http.get(this.url+"/utilisateur/login?login="+login+"&password="+password)
  }

  livreByFormat(format :String){
    return this.http.get(this.url+"/livre/livrebyformat/"+format)
  }

  listLivre(){
    return this.http.get(this.url+"/livre/lister/");
  }
livreById(id:number){
  return this.http.get(this.url+"/livre/afficher/"+id)
}

updateUser(id:any, data:any){
  this.http.put(this.url+"utilisateur/modifier"+id, data, {responseType:"text"})
}

getUser(id){
  this.http.get(this.url+"utilisateur/afficher"+id)
}

}
