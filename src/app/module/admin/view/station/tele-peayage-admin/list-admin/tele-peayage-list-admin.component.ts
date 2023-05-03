import {Component, OnInit} from '@angular/core';
import {TelePeayageService} from 'src/app/controller/service/TelePeayage.service';
import {TelePeayageDto} from 'src/app/controller/model/TelePeayage.model';
import {TelePeayageCriteria} from 'src/app/controller/criteria/TelePeayageCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-tele-peayage-list-admin',
  templateUrl: './tele-peayage-list-admin.component.html'
})
export class TelePeayageListAdminComponent extends AbstractListController<TelePeayageDto, TelePeayageCriteria, TelePeayageService>  implements OnInit {

    fileName = 'TelePeayage';

  
    constructor(telePeayageService: TelePeayageService) {
        super(telePeayageService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTelePeayages(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TelePeayage', 'list');
        isPermistted ? this.service.findAll().subscribe(telePeayages => this.items = telePeayages,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: TelePeayageDto) {
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
