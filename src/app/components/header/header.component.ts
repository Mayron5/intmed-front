import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public username: string | null = '';

  constructor(
    private _storageService: LocalStorageService,
    private _clientService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {

    this.username = this._clientService.getUserName();

  }

  public logout(): void {
    this._storageService.clear();
    this._router.navigate(['/entrar']);
  }

}
