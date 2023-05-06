import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import { environment } from 'src/environments/environment';
import { PaginatedList } from 'src/app/zynerator/dto/PaginatedList.model';
import { BaseDto } from 'src/app/zynerator/dto/BaseDto.model';

import { EvenementDto } from '../model/Evenement.model';
import { EvenementCriteria } from '../criteria/EvenementCriteria.model';
import { AbstractService } from 'src/app/zynerator/service/AbstractService';

import { AnomalieDto } from '../model/Anomalie.model';
import { TelePeayageDto } from '../model/TelePeayage.model';
import { EventTypeDto } from '../model/EventType.model';
import { StationDto } from '../model/Station.model';
import { VoieDto } from '../model/Voie.model';
import { TypeEquipementDto } from '../model/TypeEquipement.model';
import { MessageTypeDto } from '../model/MessageType.model';

@Injectable({
    providedIn: 'root'
})
export class EvenementService extends AbstractService<EvenementDto, EvenementCriteria> {
    constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/evenement/');
    }

    public constrcutDto(): EvenementDto {
        return new EvenementDto();
    }

    public constrcutCriteria(): EvenementCriteria {
        return new EvenementCriteria();
    }

    public uploadFile(file: File): Observable<string> {
        const formData: FormData = new FormData();
        formData.append('file', file, file.name);

        const req = new HttpRequest('POST', 'http://localhost:8036/api/admin/evenement/upload/exel', formData, {
            reportProgress: true,
            responseType: 'text'
        });

        return this.http.request(req).pipe(
            map((event: any) => {
                if (event.type === HttpEventType.UploadProgress) {
                    const percentDone = Math.round(100 * event.loaded / event.total);
                    console.log(`File is ${percentDone}% uploaded.`);
                } else if (event instanceof HttpResponse) {
                    console.log('File is completely uploaded!');
                    return event.body;
                }
            }),
            catchError((error: HttpErrorResponse) => {
                console.error('An error occurred:', error);
                return throwError(error.message || 'Server error');
            })
        );
    }
}
