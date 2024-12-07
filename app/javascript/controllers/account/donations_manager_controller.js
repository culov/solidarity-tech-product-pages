import { Controller } from "stimulus"
import Rails from '@rails/ujs';
import { Turbo, cable } from "@hotwired/turbo-rails";

export default class extends Controller {
  static targets = [ "charge" ]

  initialize() {

  }
  emailReceipt(event){

    let currentTarget = event.currentTarget;
    let hashId = currentTarget.getAttribute("data-donation-charge-hash-id");
    $(currentTarget).html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...').addClass('disabled').attr("disabled", true);
    fetch('/donations/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "X-CSRF-Token": this.getMetaValue("csrf-token")
            },
            body: JSON.stringify({
              hash_id: hashId,
            })
          }).then(response => response.text())
        .then((response) => {
              $.toast({text: ("Email receipt sent to " + response), position : 'top-center'});
              $(currentTarget).html("Email Receipt").removeClass('disabled').attr("disabled", null);
        })
        .catch(err => console.log(err))
  }

  linkClick(event){
    let donationUrl = event.currentTarget.getAttribute("data-next-url");
    Turbo.visit(donationUrl);
  }
  onUpdatedDonationAmount(){
    $.toast({text: "You successfully updated your contribution amount", position : 'top-center'});
  }

  getMetaValue(name) {
    const element = document.head.querySelector(`meta[name="${name}"]`)
    return element.getAttribute("content")
  }

}