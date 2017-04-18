/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {DeviceService} from './device.service';

describe('DeviceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DeviceService]
        });
    });

    it('should ...', inject([DeviceService], (service: DeviceService) => {
        expect(service).toBeTruthy();
    }));
});
