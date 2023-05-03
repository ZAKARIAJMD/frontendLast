import {AnomalieCriteria} from './AnomalieCriteria.model';
import {TelePeayageCriteria} from './TelePeayageCriteria.model';
import {EventTypeCriteria} from './EventTypeCriteria.model';
import {StationCriteria} from './StationCriteria.model';
import {VoieCriteria} from './VoieCriteria.model';
import {TypeEquipementCriteria} from './TypeEquipementCriteria.model';
import {MessageTypeCriteria} from './MessageTypeCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class EvenementCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public journeytDate: Date;
    public journeytDateFrom: Date;
    public journeytDateTo: Date;
    public eventDetails: string;
    public eventDetailsLike: string;
  public voie: VoieCriteria ;
  public voies: Array<VoieCriteria> ;
  public messageType: MessageTypeCriteria ;
  public messageTypes: Array<MessageTypeCriteria> ;
  public telePeayage: TelePeayageCriteria ;
  public telePeayages: Array<TelePeayageCriteria> ;
  public typeEquipement: TypeEquipementCriteria ;
  public typeEquipements: Array<TypeEquipementCriteria> ;
  public eventType: EventTypeCriteria ;
  public eventTypes: Array<EventTypeCriteria> ;
  public station: StationCriteria ;
  public stations: Array<StationCriteria> ;
  public anomalie: AnomalieCriteria ;
  public anomalies: Array<AnomalieCriteria> ;

}
