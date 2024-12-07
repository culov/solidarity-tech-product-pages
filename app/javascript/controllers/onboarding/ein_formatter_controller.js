import {
    Controller
} from "stimulus";


export default class extends Controller {
    static targets = ["input"]


    connect() {
        var self = this;
        // console.log("this.inputTarget", this.inputTarget)
        // this.inputTarget.addEventListener("keypress", function(e){
        //     console.log("e",e)
        //     if (
        //         e.which <= 0 || // arrow keys 
        //         e.which == 8 || // delete key 
        //         /[0-9]/.test(String.fromCharCode(e.which))

        //     ){
        //       if(self.inputTarget.value.length > 10){
        //         e.preventDefault();
        //         return false;
        //       }  
        //     }
        //     else{
        //         console.log("PREVENT THIS CHAR!!!!!")
        //         e.preventDefault();
        //         return false;
        //     }

        //     if(self.inputTarget.value.length === 2) {
        //         self.inputTarget.value += "-";
        //     }
        // })
        // this.inputTarget.addEventListener("onpaste", function(e){
        //     console.log("onpaste:", e)
        // })

        //Chat GPT generated
        this.inputTarget.addEventListener('input', function (event) {
          // Get the current input value
          let value = event.target.value;

          // Remove any non-digit characters (except for a single hyphen)
          value = value.replace(/[^\d-]/g, '');

          // Remove any extra hyphens
          value = value.replace(/-+/g, '-');

          // Ensure that the hyphen is in the correct position
          if (value.length > 2 && value.charAt(2) !== '-') {
            value = value.slice(0, 2) + '-' + value.slice(2);
          }

          // Ensure that the total length does not exceed 10 characters
          if (value.length > 10) {
            value = value.slice(0, 10);
          }

          // Update the input value
          event.target.value = value;
        });
    }
}