import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class TypeEquipementDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;
   public entree: null | boolean;
    public description: string;

}
