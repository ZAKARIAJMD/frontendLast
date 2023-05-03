import {StationTypeEquipementDto} from './StationTypeEquipement.model';
import {VoieDto} from './Voie.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class StationDto  extends BaseDto{

    public id: number;
    public libelle: string;
     public voies: Array<VoieDto>;
     public stationTypeEquipements: Array<StationTypeEquipementDto>;

}
