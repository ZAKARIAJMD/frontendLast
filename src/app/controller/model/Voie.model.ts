import {TelePeayageDto} from './TelePeayage.model';
import {TypeVoieDto} from './TypeVoie.model';
import {StationDto} from './Station.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class VoieDto  extends BaseDto{

    public id: number;
    public libelle: string;
    public code: string;
    public typeVoie: TypeVoieDto ;
    public telePeayage: TelePeayageDto ;
    public station: StationDto ;

}
