import {Component, OnInit} from '@angular/core';
import {StationService} from 'src/app/controller/service/Station.service';
import {StationDto} from 'src/app/controller/model/Station.model';
import {StationCriteria} from 'src/app/controller/criteria/StationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';


import {StationTypeEquipementDto} from 'src/app/controller/model/StationTypeEquipement.model';
import {VoieDto} from 'src/app/controller/model/Voie.model';


@Component({
  selector: 'app-station-list-admin',
  templateUrl: './station-list-admin.component.html'
})
export class StationListAdminComponent extends AbstractListController<StationDto, StationCriteria, StationService>  implements OnInit {

    fileName = 'Station';

  
    constructor(stationService: StationService) {
        super(stationService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadStations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Station', 'list');
        isPermistted ? this.service.findAll().subscribe(stations => this.items = stations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: StationDto) {
        if (res.voies != null) {
             res.voies.forEach(d => { d.station = null; d.id = null; });
        }
        if (res.stationTypeEquipements != null) {
             res.stationTypeEquipements.forEach(d => { d.station = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
