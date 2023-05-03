import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class TypeEquipementCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public entree: null | boolean;
    public description: string;
    public descriptionLike: string;

}
