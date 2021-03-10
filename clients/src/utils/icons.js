import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilter,faTrash,faPencilAlt, faEdit,
    faArrowAltCircleRight,faUndo, faInfoCircle, faSignOutAlt, faClock, faLock,
    faTrashAlt, faPenSquare,faPlayCircle, faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFilter)
library.add(faTrash)
library.add(faPencilAlt)
library.add(faInfoCircle)
library.add(faArrowAltCircleRight)
library.add(faUndo)
library.add(faSignOutAlt)
library.add(faClock)
library.add(faCheck)
library.add(faPlayCircle)
library.add(faLock)
library.add(faTrashAlt)
library.add(faPenSquare)
library.add(faEdit)

Vue.component('font-awesome-icon', FontAwesomeIcon)