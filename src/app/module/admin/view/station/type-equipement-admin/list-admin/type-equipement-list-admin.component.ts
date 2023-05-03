import {Component, OnInit} from '@angular/core';
import {TypeEquipementService} from 'src/app/controller/service/TypeEquipement.service';
import {TypeEquipementDto} from 'src/app/controller/model/TypeEquipement.model';
import {TypeEquipementCriteria} from 'src/app/controller/criteria/TypeEquipementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-type-equipement-list-admin',
  templateUrl: './type-equipement-list-admin.component.html'
})
export class TypeEquipementListAdminComponent extends AbstractListController<TypeEquipementDto, TypeEquipementCriteria, TypeEquipementService>  implements OnInit {

    fileName = 'TypeEquipement';

     yesOrNoEntree :any[] =[];
  
    constructor(typeEquipementService: TypeEquipementService) {
        super(typeEquipementService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    this.yesOrNoEntree =  [{label: 'Entree', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadTypeEquipements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeEquipement', 'list');
        isPermistted ? this.service.findAll().subscribe(typeEquipements => this.items = typeEquipements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'entree', header: 'Entree'},
        ];
    }



	public initDuplicate(res: TypeEquipementDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                'Entree': e.entree? 'Vrai' : 'Faux' ,
                 'Description': e.description ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Entree': this.criteria.entree ? (this.criteria.entree ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        }];
      }
}
