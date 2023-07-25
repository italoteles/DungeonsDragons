import { StartingEquipment } from "./StartingEquipment";

export class DDClass {
  index: string = "";
  name : string = "";
  hit_die : number = 0;
  private _starting_equipment : StartingEquipment[] = [];

  get starting_equipment() : string{
    console.log("testando get stating_equipment")
    var equipmentsString : string = "";
    if (this._starting_equipment){
      this._starting_equipment.forEach(equipment => {

        if (equipmentsString == "")
          equipmentsString = equipment.equipment.name ;
        else {
          equipmentsString = equipmentsString + ", " + equipment.equipment.name ;
        }
      });

    }
     return "teste";
  }




}
