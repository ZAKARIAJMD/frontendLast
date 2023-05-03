import {Component, OnInit} from '@angular/core';
import {VoieService} from 'src/app/controller/service/Voie.service';
import {VoieDto} from 'src/app/controller/model/Voie.model';
import {VoieCriteria} from 'src/app/controller/criteria/VoieCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { TypeVoieService } from 'src/app/controller/service/TypeVoie.service';
import { TelePeayageService } from 'src/app/controller/service/TelePeayage.service';
import { StationService } from 'src/app/controller/service/Station.service';

import {TelePeayageDto} from 'src/app/controller/model/TelePeayage.model';
import {TypeVoieDto} from 'src/app/controller/model/TypeVoie.model';
import {StationDto} from 'src/app/controller/model/Station.model';


@Component({
  selector: 'app-voie-list-admin',
  templateUrl: './voie-list-admin.component.html'
})
export class VoieListAdminComponent extends AbstractListController<VoieDto, VoieCriteria, VoieService>  implements OnInit {

    fileName = 'Voie';

    typeVoies :Array<TypeVoieDto>;
    telePeayages :Array<TelePeayageDto>;
    stations :Array<StationDto>;
  
    constructor(voieService: VoieService, private typeVoieService: TypeVoieService, private telePeayageService: TelePeayageService, private stationService: StationService) {
        super(voieService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadTypeVoie();
      this.loadTelePeayage();
      this.loadStation();
    }

    public async loadVoies(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Voie', 'list');
        isPermistted ? this.service.findAll().subscribe(voies => this.items = voies,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'typeVoie?.libelle', header: 'Type voie'},
            {field: 'telePeayage?.libelle', header: 'Tele peayage'},
            {field: 'station?.libelle', header: 'Station'},
        ];
    }


    public async loadTypeVoie(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Voie', 'list');
        isPermistted ? this.typeVoieService.findAllOptimized().subscribe(typeVoies => this.typeVoies = typeVoies,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTelePeayage(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Voie', 'list');
        isPermistted ? this.telePeayageService.findAllOptimized().subscribe(telePeayages => this.telePeayages = telePeayages,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadStation(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Voie', 'list');
        isPermistted ? this.stationService.findAllOptimized().subscribe(stations => this.stations = stations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: VoieDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
                'Type voie': e.typeVoie?.libelle ,
                'Tele peayage': e.telePeayage?.libelle ,
                'Station': e.station?.libelle ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Type voie': this.criteria.typeVoie?.libelle ? this.criteria.typeVoie?.libelle : environment.emptyForExport ,
        //'Tele peayage': this.criteria.telePeayage?.libelle ? this.criteria.telePeayage?.libelle : environment.emptyForExport ,
        //'Station': this.criteria.station?.libelle ? this.criteria.station?.libelle : environment.emptyForExport ,
        }];
      }
}
