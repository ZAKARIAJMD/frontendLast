import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EvenementService} from 'src/app/controller/service/Evenement.service';
import {EvenementDto} from 'src/app/controller/model/Evenement.model';
import {EvenementCriteria} from 'src/app/controller/criteria/EvenementCriteria.model';

import {StationDto} from 'src/app/controller/model/Station.model';
import {StationService} from 'src/app/controller/service/Station.service';
import {VoieDto} from 'src/app/controller/model/Voie.model';
import {VoieService} from 'src/app/controller/service/Voie.service';
import {EventTypeDto} from 'src/app/controller/model/EventType.model';
import {EventTypeService} from 'src/app/controller/service/EventType.service';
import {TelePeayageDto} from 'src/app/controller/model/TelePeayage.model';
import {TelePeayageService} from 'src/app/controller/service/TelePeayage.service';
import {AnomalieDto} from 'src/app/controller/model/Anomalie.model';
import {AnomalieService} from 'src/app/controller/service/Anomalie.service';
import {MessageTypeDto} from 'src/app/controller/model/MessageType.model';
import {MessageTypeService} from 'src/app/controller/service/MessageType.service';
import {TypeEquipementDto} from 'src/app/controller/model/TypeEquipement.model';
import {TypeEquipementService} from 'src/app/controller/service/TypeEquipement.service';
@Component({
  selector: 'app-evenement-view-admin',
  templateUrl: './evenement-view-admin.component.html'
})
export class EvenementViewAdminComponent extends AbstractViewController<EvenementDto, EvenementCriteria, EvenementService> implements OnInit {


    constructor(private evenementService: EvenementService, private stationService: StationService, private voieService: VoieService, private eventTypeService: EventTypeService, private telePeayageService: TelePeayageService, private anomalieService: AnomalieService, private messageTypeService: MessageTypeService, private typeEquipementService: TypeEquipementService){
        super(evenementService);
    }

    ngOnInit(): void {
        this.voie = new VoieDto();
        this.voieService.findAll().subscribe((data) => this.voies = data);
        this.messageType = new MessageTypeDto();
        this.messageTypeService.findAll().subscribe((data) => this.messageTypes = data);
        this.telePeayage = new TelePeayageDto();
        this.telePeayageService.findAll().subscribe((data) => this.telePeayages = data);
        this.typeEquipement = new TypeEquipementDto();
        this.typeEquipementService.findAll().subscribe((data) => this.typeEquipements = data);
        this.eventType = new EventTypeDto();
        this.eventTypeService.findAll().subscribe((data) => this.eventTypes = data);
        this.station = new StationDto();
        this.stationService.findAll().subscribe((data) => this.stations = data);
        this.anomalie = new AnomalieDto();
        this.anomalieService.findAll().subscribe((data) => this.anomalies = data);
    }


    get eventType(): EventTypeDto {
       return this.eventTypeService.item;
    }
    set eventType(value: EventTypeDto) {
        this.eventTypeService.item = value;
    }
    get eventTypes():Array<EventTypeDto> {
       return this.eventTypeService.items;
    }
    set eventTypes(value: Array<EventTypeDto>) {
        this.eventTypeService.items = value;
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
    get voie(): VoieDto {
       return this.voieService.item;
    }
    set voie(value: VoieDto) {
        this.voieService.item = value;
    }
    get voies():Array<VoieDto> {
       return this.voieService.items;
    }
    set voies(value: Array<VoieDto>) {
        this.voieService.items = value;
    }
    get messageType(): MessageTypeDto {
       return this.messageTypeService.item;
    }
    set messageType(value: MessageTypeDto) {
        this.messageTypeService.item = value;
    }
    get messageTypes():Array<MessageTypeDto> {
       return this.messageTypeService.items;
    }
    set messageTypes(value: Array<MessageTypeDto>) {
        this.messageTypeService.items = value;
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
    get anomalie(): AnomalieDto {
       return this.anomalieService.item;
    }
    set anomalie(value: AnomalieDto) {
        this.anomalieService.item = value;
    }
    get anomalies():Array<AnomalieDto> {
       return this.anomalieService.items;
    }
    set anomalies(value: Array<AnomalieDto>) {
        this.anomalieService.items = value;
    }


}
