import {
    Controller
} from "stimulus";

export default class extends Controller {
    static targets = ["modal", "readonlyAddress"];
    static values = {imageUrl: String, address: Object}

    connect(){
        var self = this;
        if(this.hasAddressValue){
            this.setReadonlyLabel();
        }

        $(this.modalTarget).find("form").parsley().on('form:success', function(event) {
            event.submitEvent.preventDefault();
            var params={}
            for (const field of event.fields) {
                params[field.element.name] = field.value;
                $(`#main-form *[name='${field.element.name}']`).val(field.value);
            }
            self.addressValue = params;
            self.setReadonlyLabel();
            self.modalTarget.classList.remove("modal--open");

            
        });

    }
    setReadonlyLabel(){
        this.readonlyAddressTarget.value = `${this.addressValue["street1"]} ${this.addressValue["street2"]}, ${this.addressValue["city"]}, ${this.addressValue["region"]} ${this.addressValue["postal_code"]} ${this.addressValue["iso_country"]}`
        
    }

    edit(){
        console.log("addy:", this.addressValue);
        var self = this;
        // for each addy element, select the elemnt with that name in form and update
        for (const [key, value] of Object.entries(this.addressValue)) {
          $(self.modalTarget).find(`[name="${key}"]`).val(value);
        }
        this.modalTarget.classList.add('modal--open');
    }
}