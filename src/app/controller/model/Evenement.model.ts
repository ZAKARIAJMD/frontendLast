import {AnomalieDto} from './Anomalie.model';
import {TelePeayageDto} from './TelePeayage.model';
import {EventTypeDto} from './EventType.model';
import {StationDto} from './Station.model';
import {VoieDto} from './Voie.model';
import {TypeEquipementDto} from './TypeEquipement.model';
import {MessageTypeDto} from './MessageType.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class EvenementDto  extends BaseDto{

    public id: number;
    public code: string;
   public journeytDate: Date;
    public eventDetails: string;
    public journeytDateMax: string ;
    public journeytDateMin: string ;
    public voie: VoieDto ;
    public messageType: MessageTypeDto ;
    public telePeayage: TelePeayageDto ;
    public typeEquipement: TypeEquipementDto ;
    public eventType: EventTypeDto ;
    public station: StationDto ;
    public anomalie: AnomalieDto ;

}
