import {StationDto} from './Station.model';
import {TypeEquipementDto} from './TypeEquipement.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class StationTypeEquipementDto  extends BaseDto{

    public id: number;
    public station: StationDto ;
    public typeEquipement: TypeEquipementDto ;

}
