import { Component } from '@angular/core';
import { Race } from 'src/app/models/Races/Race';
import { RacesService } from 'src/app/services/races.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent {
  public races : string[] = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling'];
  public racesList : Race[] = [];
  public searchValue : string = "";

  public p: number = 1;
  public numberPerPages: number = 3;



  constructor(private racesService: RacesService) {}


  ngOnInit(): void {

    this.loadRaces();
  }



  public loadRaces() : void{

    this.races.forEach(raceIndex => {
      this.racesService.getRace(raceIndex).subscribe({
        next: (raceReturned: Race) => {
          this.racesList.push(raceReturned);

        },
        error: (error: any) => {
          console.error(error);
        }

      });
    });

  }





  public pageChange(event: any): void {
    this.p = event;

  }
}
