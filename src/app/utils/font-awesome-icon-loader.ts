import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faPlusSquare,
        faSearch, faPlus,faLock,
        faBell,faInfoCircle,
        faTimes,faClock,faUser,
        faPen, faPencilAlt, 
        faAlignJustify, faCheckSquare,
        faEllipsisH, faStar, faGlobe } from '@fortawesome/free-solid-svg-icons';

export class FontAwesomeIconLoader {
    iconsArray:IconDefinition[] = [];
    constructor(){
         this.iconsArray
            .push(
                faHome, faPlusSquare,
                faSearch, faPlus,faLock,
                faBell,faInfoCircle,
                faTimes,faClock,faUser,
                faPen,faPencilAlt, 
                faAlignJustify, faCheckSquare,
                faEllipsisH, faStar,faGlobe);
    }
}