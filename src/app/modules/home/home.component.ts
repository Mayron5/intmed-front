import { Component, OnInit } from '@angular/core';
import { OpacityAnimation } from 'src/app/animations/opacittyAnimation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [OpacityAnimation]
})
export class HomeComponent implements OnInit {

  public shouldOpenModal: boolean = false;
  public shouldOpenConfirmation: boolean = false;
  public id: number = 0;

  public data = [
    {
      specialty: 'Cardiologia',
      medic: 'Dr. Caio Carlos Ferreira',
      date: '01/01/2020',
      hour: '13:00',
      id: 1
    },
    {
      specialty: 'Cardiologia',
      medic: 'Dr. Caio Carlos Ferreira',
      date: '01/01/2020',
      hour: '13:00',
      id: 2
    },
    {
      specialty: 'Cardiologia',
      medic: 'Dr. Caio Carlos Ferreira',
      date: '01/01/2020',
      hour: '13:00',
      id: 3
    },
    {
      specialty: 'Cardiologia',
      medic: 'Dr. Caio Carlos Ferreira',
      date: '01/01/2020',
      hour: '13:00',
      id: 4
    },
    {
      specialty: 'Cardiologia',
      medic: 'Dr. Caio Carlos Ferreira',
      date: '01/01/2020',
      hour: '13:00',
      id: 4
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  public confirmation(id: number) {
    this.id = id;
    this.shouldOpenConfirmation = true;
  }

}
