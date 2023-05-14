import {Component, OnInit} from '@angular/core';
import {EvenementService} from 'src/app/controller/service/Evenement.service';
import {EvenementDto} from 'src/app/controller/model/Evenement.model';
import {EvenementCriteria} from 'src/app/controller/criteria/EvenementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { VoieService } from 'src/app/controller/service/Voie.service';
import { MessageTypeService } from 'src/app/controller/service/MessageType.service';
import { TelePeayageService } from 'src/app/controller/service/TelePeayage.service';
import { TypeEquipementService } from 'src/app/controller/service/TypeEquipement.service';
import { EventTypeService } from 'src/app/controller/service/EventType.service';
import { StationService } from 'src/app/controller/service/Station.service';
import { AnomalieService } from 'src/app/controller/service/Anomalie.service';

import {AnomalieDto} from 'src/app/controller/model/Anomalie.model';
import {TelePeayageDto} from 'src/app/controller/model/TelePeayage.model';
import {EventTypeDto} from 'src/app/controller/model/EventType.model';
import {StationDto} from 'src/app/controller/model/Station.model';
import {VoieDto} from 'src/app/controller/model/Voie.model';
import {TypeEquipementDto} from 'src/app/controller/model/TypeEquipement.model';
import {MessageTypeDto} from 'src/app/controller/model/MessageType.model';
import {HttpClient} from "@angular/common/http";
import * as XLSX from 'xlsx';


@Component({
    selector: 'app-evenement-list-admin',
    templateUrl: './evenement-list-admin.component.html'
})
export class EvenementListAdminComponent extends AbstractListController<EvenementDto, EvenementCriteria, EvenementService>  implements OnInit {

    fileName = 'Evenement';

    voies :Array<VoieDto>;
    messageTypes :Array<MessageTypeDto>;
    telePeayages :Array<TelePeayageDto>;
    typeEquipements :Array<TypeEquipementDto>;
    eventTypes :Array<EventTypeDto>;
    stations :Array<StationDto>;
    anomalies :Array<AnomalieDto>;
    fileToUpload: File = null;
    data : [][];



    constructor(private evenementService: EvenementService, private voieService: VoieService, private messageTypeService: MessageTypeService,
                private telePeayageService: TelePeayageService, private typeEquipementService: TypeEquipementService,
                private eventTypeService: EventTypeService, private stationService: StationService, private anomalieService: AnomalieService ,private http: HttpClient) {
        super(evenementService);
    }






    ngOnInit() : void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadVoie();
        this.loadMessageType();
        this.loadTelePeayage();
        this.loadTypeEquipement();
        this.loadEventType();
        this.loadStation();
        this.loadAnomalie();
    }
    onFileChange(evt: any) {
        const target: DataTransfer = <DataTransfer>(evt.target);

        if (target.files.length !== 1) throw new Error('Cannot use multiple files');

        const reader: FileReader = new FileReader();

        reader.onload = (e: any) => {
            const bstr: string = e.target.result;

            const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

            const wsname: string = wb.SheetNames[0];

            const ws: XLSX.WorkSheet = wb.Sheets[wsname];

            console.log(ws);

            const data: any[] = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false });

            const headers: string[] = data.shift();

            const result: any[] = [];

            for (const row of data) {
                const obj: any = {};

                for (let i = 0; i < headers.length; i++) {
                    obj[headers[i]] = row[i];
                }

                result.push(obj);
            }

            console.log(result);


            // Call the service to upload the data to the backend
            const jsonResult = JSON.stringify(result);
            const sata = jsonResult.split('\n'); // split the JSON string into an array of strings
            this.evenementService.uploadFile(sata).subscribe(response => {
                if(response != null) {
                    console.log(response);
                    alert("DATA SAVED SUCCESSFULLY")
                }else {
                    alert("ERROR")
                }

            });
        };

        reader.readAsBinaryString(target.files[0]);
    }







    public async loadEvenements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Evenement', 'list');
        isPermistted ? this.service.findAll().subscribe(evenements => this.items = evenements,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }



    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'journeytDate', header: 'Journeyt date'},
            {field: 'voie?.libelle', header: 'Voie'},
            {field: 'messageType?.libelle', header: 'Message type'},
            {field: 'telePeayage?.libelle', header: 'Tele peayage'},
            {field: 'typeEquipement?.libelle', header: 'Type equipement'},
            {field: 'eventType?.libelle', header: 'Event type'},
            {field: 'station?.libelle', header: 'Station'},
            {field: 'anomalie?.libelle', header: 'Anomalie'},
        ];
    }


    public async loadVoie(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Evenement', 'list');
        isPermistted ? this.voieService.findAllOptimized().subscribe(voies => this.voies = voies,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadMessageType(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Evenement', 'list');
        isPermistted ? this.messageTypeService.findAllOptimized().subscribe(messageTypes => this.messageTypes = messageTypes,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTelePeayage(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Evenement', 'list');
        isPermistted ? this.telePeayageService.findAllOptimized().subscribe(telePeayages => this.telePeayages = telePeayages,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTypeEquipement(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Evenement', 'list');
        isPermistted ? this.typeEquipementService.findAllOptimized().subscribe(typeEquipements => this.typeEquipements = typeEquipements,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEventType(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Evenement', 'list');
        isPermistted ? this.eventTypeService.findAllOptimized().subscribe(eventTypes => this.eventTypes = eventTypes,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadStation(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Evenement', 'list');
        isPermistted ? this.stationService.findAllOptimized().subscribe(stations => this.stations = stations,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadAnomalie(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Evenement', 'list');
        isPermistted ? this.anomalieService.findAllOptimized().subscribe(anomalies => this.anomalies = anomalies,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public initDuplicate(res: EvenementDto) {
    }

    public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Code': e.code ,
                'Journeyt date': this.datePipe.transform(e.journeytDate , 'dd/MM/yyyy hh:mm'),
                'Voie': e.voie?.libelle ,
                'Message type': e.messageType?.libelle ,
                'Tele peayage': e.telePeayage?.libelle ,
                'Type equipement': e.typeEquipement?.libelle ,
                'Event type': e.eventType?.libelle ,
                'Event details': e.eventDetails ,
                'Station': e.station?.libelle ,
                'Anomalie': e.anomalie?.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Journeyt date Min': this.criteria.journeytDateFrom ? this.datePipe.transform(this.criteria.journeytDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Journeyt date Max': this.criteria.journeytDateTo ? this.datePipe.transform(this.criteria.journeytDateTo , this.dateFormat) : environment.emptyForExport ,
            //'Voie': this.criteria.voie?.libelle ? this.criteria.voie?.libelle : environment.emptyForExport ,
            //'Message type': this.criteria.messageType?.libelle ? this.criteria.messageType?.libelle : environment.emptyForExport ,
            //'Tele peayage': this.criteria.telePeayage?.libelle ? this.criteria.telePeayage?.libelle : environment.emptyForExport ,
            //'Type equipement': this.criteria.typeEquipement?.libelle ? this.criteria.typeEquipement?.libelle : environment.emptyForExport ,
            //'Event type': this.criteria.eventType?.libelle ? this.criteria.eventType?.libelle : environment.emptyForExport ,
            'Event details': this.criteria.eventDetails ? this.criteria.eventDetails : environment.emptyForExport ,
            //'Station': this.criteria.station?.libelle ? this.criteria.station?.libelle : environment.emptyForExport ,
            //'Anomalie': this.criteria.anomalie?.libelle ? this.criteria.anomalie?.libelle : environment.emptyForExport ,
        }];
    }
}
