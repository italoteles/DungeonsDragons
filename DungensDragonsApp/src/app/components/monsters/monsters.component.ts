import { Component } from '@angular/core';
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
  p: number = 1;
  numberPerPages : number = 5;

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

  public meuMetodo(event : any) : void {
    this.p = event;

    // let totalPages = Math.ceil(this.monsterList.results.length / 3);
    let startArray : number = 0;
    let endArray : number = 0;


    endArray  = (this.p * this.numberPerPages) - 1;
    startArray  = (this.p * this.numberPerPages) - this.numberPerPages;

    let monsterListDetails : Result[] = this.monsterList.results.slice(startArray,endArray+1);


    console.log("Página=" + this.p);
    console.log("Início=" + startArray);
    console.log("Fim=" + endArray);
    console.log(monsterListDetails);
    console.log("Nome do primeiro=" + monsterListDetails[0].name);
    console.log("Nome do ultimo=" + monsterListDetails[2].name);


  }
}
