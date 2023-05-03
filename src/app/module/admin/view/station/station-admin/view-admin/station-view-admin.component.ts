import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {StationService} from 'src/app/controller/service/Station.service';
import {StationDto} from 'src/app/controller/model/Station.model';
import {StationCriteria} from 'src/app/controller/criteria/StationCriteria.model';

import {VoieDto} from 'src/app/controller/model/Voie.model';
import {VoieService} from 'src/app/controller/service/Voie.service';
import {TelePeayageDto} from 'src/app/controller/model/TelePeayage.model';
import {TelePeayageService} from 'src/app/controller/service/TelePeayage.service';
import {StationTypeEquipementDto} from 'src/app/controller/model/StationTypeEquipement.model';
import {StationTypeEquipementService} from 'src/app/controller/service/StationTypeEquipement.service';
import {TypeVoieDto} from 'src/app/controller/model/TypeVoie.model';
import {TypeVoieService} from 'src/app/controller/service/TypeVoie.service';
import {TypeEquipementDto} from 'src/app/controller/model/TypeEquipement.model';
import {TypeEquipementService} from 'src/app/controller/service/TypeEquipement.service';
@Component({
  selector: 'app-station-view-admin',
  templateUrl: './station-view-admin.component.html'
})
export class StationViewAdminComponent extends AbstractViewController<StationDto, StationCriteria, StationService> implements OnInit {

    voies = new VoieDto();
    voiess: Array<VoieDto> = [];
    stationTypeEquipements = new StationTypeEquipementDto();
    stationTypeEquipementss: Array<StationTypeEquipementDto> = [];

    constructor(private stationService: StationService, private voieService: VoieService, private telePeayageService: TelePeayageService, private stationTypeEquipementService: StationTypeEquipementService, private typeVoieService: TypeVoieService, private typeEquipementService: TypeEquipementService){
        super(stationService);
    }

    ngOnInit(): void {
        this.voies.typeVoie = new TypeVoieDto();
        this.typeVoieService.findAll().subscribe((data) => this.typeVoies = data);
        this.voies.telePeayage = new TelePeayageDto();
        this.telePeayageService.findAll().subscribe((data) => this.telePeayages = data);
        this.stationTypeEquipements.typeEquipement = new TypeEquipementDto();
        this.typeEquipementService.findAll().subscribe((data) => this.typeEquipements = data);
    }


    get telePeayage(): TelePeayageDto {
       return this.telePeayageService.item;
    }
    set telePeayage(value: TelePeayageDto) {
        this.telePeayageService.item = value;
    }
    get telePeayages():Array<TelePeayageDto> {
       return this.telePeayageService.items;
    }
    set telePeayages(value: Array<TelePeayageDto>) {
        this.telePeayageService.items = value;
    }
    get typeEquipement(): TypeEquipementDto {
       return this.typeEquipementService.item;
    }
    set typeEquipement(value: TypeEquipementDto) {
        this.typeEquipementService.item = value;
    }
    get typeEquipements():Array<TypeEquipementDto> {
       return this.typeEquipementService.items;
    }
    set typeEquipements(value: Array<TypeEquipementDto>) {
        this.typeEquipementService.items = value;
    }
    get typeVoie(): TypeVoieDto {
       return this.typeVoieService.item;
    }
    set typeVoie(value: TypeVoieDto) {
        this.typeVoieService.item = value;
    }
    get typeVoies():Array<TypeVoieDto> {
       return this.typeVoieService.items;
    }
    set typeVoies(value: Array<TypeVoieDto>) {
        this.typeVoieService.items = value;
    }


}
