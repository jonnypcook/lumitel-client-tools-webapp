import {Installation} from './installation.model';
import {Space} from './space.model';

export interface AppStore {
    installations: Installation[];
    installation: Installation;
    spaces: Space[];
    space: Space;
}
;
