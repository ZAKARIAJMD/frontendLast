import {StationTypeEquipementCriteria} from './StationTypeEquipementCriteria.model';
import {VoieCriteria} from './VoieCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class StationCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
      public voies: Array<VoieCriteria>;
      public stationTypeEquipements: Array<StationTypeEquipementCriteria>;

}
