import {StationCriteria} from './StationCriteria.model';
import {TypeEquipementCriteria} from './TypeEquipementCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class StationTypeEquipementCriteria  extends   BaseCriteria  {

    public id: number;
  public station: StationCriteria ;
  public stations: Array<StationCriteria> ;
  public typeEquipement: TypeEquipementCriteria ;
  public typeEquipements: Array<TypeEquipementCriteria> ;

}
