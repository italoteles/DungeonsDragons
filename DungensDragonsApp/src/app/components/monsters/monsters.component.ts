import { Component } from '@angular/core';
import { MonsterList } from 'src/app/models/monsters/MonsterList';
import { MonstersService } from 'src/app/services/monsters.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss'],
})
export class MonstersComponent {
  public monsterList: MonsterList = {} as MonsterList;

  constructor(private monstersService: MonstersService) {}

  public ngOnInit(): void {
    this.loadMonsters();
  }

  public loadMonsters() {
    this.monstersService.getMonsters().subscribe({
      next: (monsterListReturned : MonsterList) => {
        this.monsterList = monsterListReturned;
        // console.log("contador de monstrossssssss=========" + this.monsterList.count + this.monsterList.results[1].name)
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
