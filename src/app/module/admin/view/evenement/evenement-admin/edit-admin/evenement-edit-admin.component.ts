import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

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
  selector: 'app-evenement-edit-admin',
  templateUrl: './evenement-edit-admin.component.html'
})
export class EvenementEditAdminComponent extends AbstractEditController<EvenementDto, EvenementCriteria, EvenementService>   implements OnInit {


    private _validEvenementCode = true;

    private _validVoieLibelle = true;
    private _validVoieCode = true;
    private _validMessageTypeCode = true;
    private _validMessageTypeLibelle = true;
    private _validTelePeayageCode = true;
    private _validTelePeayageLibelle = true;
    private _validTypeEquipementCode = true;
    private _validTypeEquipementLibelle = true;
    private _validEventTypeCode = true;
    private _validEventTypeLibelle = true;
    private _validStationLibelle = true;
    private _validAnomalieCode = true;
    private _validAnomalieLibelle = true;



    constructor( private evenementService: EvenementService , private stationService: StationService, private voieService: VoieService, private eventTypeService: EventTypeService, private telePeayageService: TelePeayageService, private anomalieService: AnomalieService, private messageTypeService: MessageTypeService, private typeEquipementService: TypeEquipementService) {
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
    public prepareEdit() {
        this.item.journeytDate = this.evenementService.format(this.item.journeytDate);
    }



    public setValidation(value : boolean){
        this.validEvenementCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEvenementCode();
    }
    public validateEvenementCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validEvenementCode = false;
        } else {
            this.validEvenementCode = true;
        }
    }



   public async openCreateEventType(eventType: string) {
        const isPermistted = await this.roleService.isPermitted('EventType', 'edit');
        if(isPermistted) {
             this.eventType = new EventTypeDto();
             this.createEventTypeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateMessageType(messageType: string) {
        const isPermistted = await this.roleService.isPermitted('MessageType', 'edit');
        if(isPermistted) {
             this.messageType = new MessageTypeDto();
             this.createMessageTypeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateAnomalie(anomalie: string) {
        const isPermistted = await this.roleService.isPermitted('Anomalie', 'edit');
        if(isPermistted) {
             this.anomalie = new AnomalieDto();
             this.createAnomalieDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get eventType(): EventTypeDto {
       return this.eventTypeService.item;
   }
  set eventType(value: EventTypeDto) {
        this.eventTypeService.item = value;
   }
   get eventTypes(): Array<EventTypeDto> {
        return this.eventTypeService.items;
   }
   set eventTypes(value: Array<EventTypeDto>) {
        this.eventTypeService.items = value;
   }
   get createEventTypeDialog(): boolean {
       return this.eventTypeService.createDialog;
   }
  set createEventTypeDialog(value: boolean) {
       this.eventTypeService.createDialog= value;
   }
   get station(): StationDto {
       return this.stationService.item;
   }
  set station(value: StationDto) {
        this.stationService.item = value;
   }
   get stations(): Array<StationDto> {
        return this.stationService.items;
   }
   set stations(value: Array<StationDto>) {
        this.stationService.items = value;
   }
   get createStationDialog(): boolean {
       return this.stationService.createDialog;
   }
  set createStationDialog(value: boolean) {
       this.stationService.createDialog= value;
   }
   get telePeayage(): TelePeayageDto {
       return this.telePeayageService.item;
   }
  set telePeayage(value: TelePeayageDto) {
        this.telePeayageService.item = value;
   }
   get telePeayages(): Array<TelePeayageDto> {
        return this.telePeayageService.items;
   }
   set telePeayages(value: Array<TelePeayageDto>) {
        this.telePeayageService.items = value;
   }
   get createTelePeayageDialog(): boolean {
       return this.telePeayageService.createDialog;
   }
  set createTelePeayageDialog(value: boolean) {
       this.telePeayageService.createDialog= value;
   }
   get voie(): VoieDto {
       return this.voieService.item;
   }
  set voie(value: VoieDto) {
        this.voieService.item = value;
   }
   get voies(): Array<VoieDto> {
        return this.voieService.items;
   }
   set voies(value: Array<VoieDto>) {
        this.voieService.items = value;
   }
   get createVoieDialog(): boolean {
       return this.voieService.createDialog;
   }
  set createVoieDialog(value: boolean) {
       this.voieService.createDialog= value;
   }
   get messageType(): MessageTypeDto {
       return this.messageTypeService.item;
   }
  set messageType(value: MessageTypeDto) {
        this.messageTypeService.item = value;
   }
   get messageTypes(): Array<MessageTypeDto> {
        return this.messageTypeService.items;
   }
   set messageTypes(value: Array<MessageTypeDto>) {
        this.messageTypeService.items = value;
   }
   get createMessageTypeDialog(): boolean {
       return this.messageTypeService.createDialog;
   }
  set createMessageTypeDialog(value: boolean) {
       this.messageTypeService.createDialog= value;
   }
   get typeEquipement(): TypeEquipementDto {
       return this.typeEquipementService.item;
   }
  set typeEquipement(value: TypeEquipementDto) {
        this.typeEquipementService.item = value;
   }
   get typeEquipements(): Array<TypeEquipementDto> {
        return this.typeEquipementService.items;
   }
   set typeEquipements(value: Array<TypeEquipementDto>) {
        this.typeEquipementService.items = value;
   }
   get createTypeEquipementDialog(): boolean {
       return this.typeEquipementService.createDialog;
   }
  set createTypeEquipementDialog(value: boolean) {
       this.typeEquipementService.createDialog= value;
   }
   get anomalie(): AnomalieDto {
       return this.anomalieService.item;
   }
  set anomalie(value: AnomalieDto) {
        this.anomalieService.item = value;
   }
   get anomalies(): Array<AnomalieDto> {
        return this.anomalieService.items;
   }
   set anomalies(value: Array<AnomalieDto>) {
        this.anomalieService.items = value;
   }
   get createAnomalieDialog(): boolean {
       return this.anomalieService.createDialog;
   }
  set createAnomalieDialog(value: boolean) {
       this.anomalieService.createDialog= value;
   }


    get validEvenementCode(): boolean {
        return this._validEvenementCode;
    }
    set validEvenementCode(value: boolean) {
        this._validEvenementCode = value;
    }

    get validVoieLibelle(): boolean {
        return this._validVoieLibelle;
    }
    set validVoieLibelle(value: boolean) {
        this._validVoieLibelle = value;
    }
    get validVoieCode(): boolean {
        return this._validVoieCode;
    }
    set validVoieCode(value: boolean) {
        this._validVoieCode = value;
    }
    get validMessageTypeCode(): boolean {
        return this._validMessageTypeCode;
    }
    set validMessageTypeCode(value: boolean) {
        this._validMessageTypeCode = value;
    }
    get validMessageTypeLibelle(): boolean {
        return this._validMessageTypeLibelle;
    }
    set validMessageTypeLibelle(value: boolean) {
        this._validMessageTypeLibelle = value;
    }
    get validTelePeayageCode(): boolean {
        return this._validTelePeayageCode;
    }
    set validTelePeayageCode(value: boolean) {
        this._validTelePeayageCode = value;
    }
    get validTelePeayageLibelle(): boolean {
        return this._validTelePeayageLibelle;
    }
    set validTelePeayageLibelle(value: boolean) {
        this._validTelePeayageLibelle = value;
    }
    get validTypeEquipementCode(): boolean {
        return this._validTypeEquipementCode;
    }
    set validTypeEquipementCode(value: boolean) {
        this._validTypeEquipementCode = value;
    }
    get validTypeEquipementLibelle(): boolean {
        return this._validTypeEquipementLibelle;
    }
    set validTypeEquipementLibelle(value: boolean) {
        this._validTypeEquipementLibelle = value;
    }
    get validEventTypeCode(): boolean {
        return this._validEventTypeCode;
    }
    set validEventTypeCode(value: boolean) {
        this._validEventTypeCode = value;
    }
    get validEventTypeLibelle(): boolean {
        return this._validEventTypeLibelle;
    }
    set validEventTypeLibelle(value: boolean) {
        this._validEventTypeLibelle = value;
    }
    get validStationLibelle(): boolean {
        return this._validStationLibelle;
    }
    set validStationLibelle(value: boolean) {
        this._validStationLibelle = value;
    }
    get validAnomalieCode(): boolean {
        return this._validAnomalieCode;
    }
    set validAnomalieCode(value: boolean) {
        this._validAnomalieCode = value;
    }
    get validAnomalieLibelle(): boolean {
        return this._validAnomalieLibelle;
    }
    set validAnomalieLibelle(value: boolean) {
        this._validAnomalieLibelle = value;
    }
}
