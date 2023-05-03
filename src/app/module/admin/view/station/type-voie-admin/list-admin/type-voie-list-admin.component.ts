import {Component, OnInit} from '@angular/core';
import {TypeVoieService} from 'src/app/controller/service/TypeVoie.service';
import {TypeVoieDto} from 'src/app/controller/model/TypeVoie.model';
import {TypeVoieCriteria} from 'src/app/controller/criteria/TypeVoieCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-type-voie-list-admin',
  templateUrl: './type-voie-list-admin.component.html'
})
export class TypeVoieListAdminComponent extends AbstractListController<TypeVoieDto, TypeVoieCriteria, TypeVoieService>  implements OnInit {

    fileName = 'TypeVoie';

  
    constructor(typeVoieService: TypeVoieService) {
        super(typeVoieService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypeVoies(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeVoie', 'list');
        isPermistted ? this.service.findAll().subscribe(typeVoies => this.items = typeVoies,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: TypeVoieDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
