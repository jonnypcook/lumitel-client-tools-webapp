import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Router}   from '@angular/router';
import {Observable} from "rxjs/Observable";
import {InstallationsService} from '../common/services/installations.service';
import {Installation} from '../common/models/installation.model';

@Component({
    selector: 'installation-list',
    templateUrl: './installation-list.component.html',
    providers: [InstallationsService]
})
export class InstallationListComponent implements OnInit, OnDestroy {
    installations: Observable<Array<Installation>>;

    public totalItems: number = 0;
    public currentPage: number = 1;

    @Input() public itemsPerPage: number = 2;

    constructor(private installationsService: InstallationsService, private router: Router) {
    }

    ngOnInit() {
        this.installations = this.installationsService.installations;
        this.installations.subscribe(action => this.prepInstallationsTableData(action));
        if (this.totalItems === 0) {
            this.installationsService.loadInstallations();
        }
    }

    ngOnDestroy() {
    }

    /**
     * check to see if installations are loading
     * @returns {boolean}
     */
    public loading() {
        return !this.totalItems;
    }

    /**
     * prepare installations table data on notification
     * @param action
     */
    public prepInstallationsTableData(action: any): void {
        this.totalItems = action.length;
    }

    /**
     * select installation
     * @param installation
     */
    public installationSelected(installation: Installation) {
        if (!installation.installation_id) {
            return;
        }

        this.router.navigate(['/installation', installation.installation_id]);
    }

}
