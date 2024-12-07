import {Controller} from "stimulus"


export default class extends Controller {
    static targets = ["input"];
    static values = {};
    connect(){

        try {
            this.inputTarget.value = Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        catch (e) {}


    }

}


