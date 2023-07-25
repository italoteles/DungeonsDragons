import { Component, OnInit } from '@angular/core';
import { DDClass } from 'src/app/models/Classes/DDClass';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  public classes : string[] = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard'];
  public classList : DDClass[] = [];

  public p: number = 1;
  public numberPerPages: number = 3;



  constructor(private classesService: ClassesService) {}


  ngOnInit(): void {

    this.loadClasses();
  }



  public loadClasses() : void{

    this.classes.forEach(className => {
      this.classesService.getClass(className).subscribe({
        next: (classReturned: DDClass) => {
          this.classList.push(classReturned);

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
