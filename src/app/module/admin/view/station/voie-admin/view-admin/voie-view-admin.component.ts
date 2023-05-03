import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {VoieService} from 'src/app/controller/service/Voie.service';
import {VoieDto} from 'src/app/controller/model/Voie.model';
import {VoieCriteria} from 'src/app/controller/criteria/VoieCriteria.model';

import {StationDto} from 'src/app/controller/model/Station.model';
import {StationService} from 'src/app/controller/service/Station.service';
import {TelePeayageDto} from 'src/app/controller/model/TelePeayage.model';
import {TelePeayageService} from 'src/app/controller/service/TelePeayage.service';
import {TypeVoieDto} from 'src/app/controller/model/TypeVoie.model';
import {TypeVoieService} from 'src/app/controller/service/TypeVoie.service';
@Component({
  selector: 'app-voie-view-admin',
  templateUrl: './voie-view-admin.component.html'
})
export class VoieViewAdminComponent extends AbstractViewController<VoieDto, VoieCriteria, VoieService> implements OnInit {


    constructor(private voieService: VoieService, private stationService: StationService, private telePeayageService: TelePeayageService, private typeVoieService: TypeVoieService){
        super(voieService);
    }

    ngOnInit(): void {
        this.typeVoie = new TypeVoieDto();
        this.typeVoieService.findAll().subscribe((data) => this.typeVoies = data);
        this.telePeayage = new TelePeayageDto();
        this.telePeayageService.findAll().subscribe((data) => this.telePeayages = data);
        this.station = new StationDto();
        this.stationService.findAll().subscribe((data) => this.stations = data);
    }


    get station(): StationDto {
       return this.stationService.item;
    }
    set station(value: StationDto) {
        this.stationService.item = value;
    }
    get stations():Array<StationDto> {
       return this.stationService.items;
    }
    set stations(value: Array<StationDto>) {
        this.stationService.items = value;
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
