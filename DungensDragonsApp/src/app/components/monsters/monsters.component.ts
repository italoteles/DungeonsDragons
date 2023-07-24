import { Component } from '@angular/core';
import { Monster } from 'src/app/models/monsters/Monster';
import { MonsterList } from 'src/app/models/monsters/MonsterList';
import { Result } from 'src/app/models/monsters/Result';
import { MonstersService } from 'src/app/services/monsters.service';


@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss'],
})
export class MonstersComponent {
  public monsterList: MonsterList = {} as MonsterList;
  public p: number = 1;
  public numberPerPages: number = 3;
  public monsterDetailList: Monster[] = [];
  public indexMonsterDetailList : number = 0;
  public visible : boolean = false;
  public isBlur : boolean = false;

  constructor(private monstersService: MonstersService) {}

  public ngOnInit(): void {
    this.loadMonsters();
  }


  public loadMonsters() {
    this.monstersService.getMonsters().subscribe({
      next: (monsterListReturned: MonsterList) => {
        this.monsterList = monsterListReturned;
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        let monsterListSliced: Result[] = this.monsterList.results.slice(0,3);

        monsterListSliced.forEach((monster) => {

          this.monstersService.getMonstersDetails(monster.index).subscribe({
            next: (monsterReturned: Monster) => {
              this.monsterDetailList.push(monsterReturned);
            },
            error: (error: any) => {
              console.error(error);
            },
          });
        });
      },
    });
  }

  public pageChange(event: any): void {
    this.p = event;
    this.monsterDetailList = []

    let startArray: number = 0;
    let endArray: number = 0;

    endArray = this.p * this.numberPerPages - 1;
    startArray = this.p * this.numberPerPages - this.numberPerPages;

    let monsterListSliced: Result[] = this.monsterList.results.slice(startArray,endArray + 1);

    monsterListSliced.forEach((monster) => {


      this.monstersService.getMonstersDetails(monster.index).subscribe({
        next: (monsterReturned: Monster) => {
          this.monsterDetailList.push(monsterReturned);
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    });
  }

  public showDialog(i : number) : void {
    this.visible = true;
    this.indexMonsterDetailList = i;
    this.isBlur = true;
  }

  public endBlur(e : Event) : void {
    this.isBlur = false;
  }
}
