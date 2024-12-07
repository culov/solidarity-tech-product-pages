import {
    Controller
} from "stimulus";
// import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { AsYouType } from 'libphonenumber-js'

export default class extends Controller {
    static targets = ["input", "hiddenInput"]
    // static values = {initialCountry: {type: String, default: "US"}, onlyCountries: {type: Array, default: ["US", "CA"]}};

    connect() {
        var self = this;

        intlTelInput(this.inputTarget, {
           utilsScript: "https://s3.amazonaws.com/solidarity.tech/scripts/phone_utils.js",
            autoPlaceholder: true,
            formatOnDisplay: true,
            onlyCountries: ["US"],
            allowDropdown: false
        });

        $(this.inputTarget).on("change keyup", function(e) {


            var newVal = new AsYouType('US').input(self.inputTarget.value);
            //Allows for deletion of numbers around formatted area codes
            if(e.originalEvent.code=="Backspace" && newVal.charAt(newVal.length - 1) == ")"){
                newVal = newVal.substring(0, newVal.length - 1).trim();
            }
            $(this).val(newVal);


            if(self.hasHiddenInputTarget){
                const number = self.inputTarget.value.replace(/\D/g,'');
                $(self.hiddenInputTarget).val(`${number.charAt(0)=="1" ? "" : "1"}${number}`);
            }

            
        });

    }
}