import {TelePeayageCriteria} from './TelePeayageCriteria.model';
import {TypeVoieCriteria} from './TypeVoieCriteria.model';
import {StationCriteria} from './StationCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class VoieCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public code: string;
    public codeLike: string;
  public typeVoie: TypeVoieCriteria ;
  public typeVoies: Array<TypeVoieCriteria> ;
  public telePeayage: TelePeayageCriteria ;
  public telePeayages: Array<TelePeayageCriteria> ;
  public station: StationCriteria ;
  public stations: Array<StationCriteria> ;

}
