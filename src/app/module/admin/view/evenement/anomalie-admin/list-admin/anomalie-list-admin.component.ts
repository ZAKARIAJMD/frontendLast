import {Component, OnInit} from '@angular/core';
import {AnomalieService} from 'src/app/controller/service/Anomalie.service';
import {AnomalieDto} from 'src/app/controller/model/Anomalie.model';
import {AnomalieCriteria} from 'src/app/controller/criteria/AnomalieCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-anomalie-list-admin',
  templateUrl: './anomalie-list-admin.component.html'
})
export class AnomalieListAdminComponent extends AbstractListController<AnomalieDto, AnomalieCriteria, AnomalieService>  implements OnInit {

    fileName = 'Anomalie';

  
    constructor(anomalieService: AnomalieService) {
        super(anomalieService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadAnomalies(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Anomalie', 'list');
        isPermistted ? this.service.findAll().subscribe(anomalies => this.items = anomalies,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: AnomalieDto) {
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
