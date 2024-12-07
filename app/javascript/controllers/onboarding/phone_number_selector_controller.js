import {
    Controller
} from "stimulus";

export default class extends Controller {
    static targets = ["input", "areaCodeError", "modal", "modalTurboFrame", "selectedPhoneNumberSid", "selectedPhoneNumberLabel"]
    static values = {validAreaCodes: Array};
    connect(){

        // limit to 3 chars and validate zipcode
        // on button submit, set url and show modal
        //fetch modal with area code
    }

    search(){

        let val = parseInt(this.inputTarget.value);

        if(this.validAreaCodesValue.includes(val)){

            this.areaCodeErrorTarget.innerHTML = "";
            
            // update the turbo-frame src url for modal

            this.modalTurboFrameTarget.src = `/onboarding/3/number-selection?area_code=${val}`
            
            this.modalTarget.classList.add("modal--open");
            

        }
        else{
            this.areaCodeErrorTarget.innerHTML = "Enter a valid 3-digit US area code";

        }
    }

    selectNumber(e){
        this.selectedPhoneNumberLabelTarget.innerHTML = `You've selected the number <strong>${e.target.dataset.friendlyName}</strong>`;
        this.selectedPhoneNumberSidTarget.value = e.target.dataset.phoneNumber;
        this.modalTarget.classList.remove("modal--open");
        this.modalTurboFrameTarget.innerHTML = window.spinnerSvg;
        $('#main-form').parsley().validate();
    }
}