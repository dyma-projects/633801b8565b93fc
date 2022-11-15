import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public users = new BehaviorSubject<string[]>([]);

  constructor() {}

  public addUser(username) {
    this.users.subscribe((users) => {
      users.push(username);
    });
  }
}
