import {  Controller } from "stimulus"
import Rails from '@rails/ujs';

export default class extends Controller {
    static targets = [ 'cardElement', 'cardErrors', 'form' ]

    connect() {
        this.has_stripe_card_token = false;
        this.last4 = this.brand = this.expMonth = this.expYear = null;

        // var stripe = Stripe("pk_test_h1AKPZVQXZH1dwTTl4uEy1Qo");
        var stripe = Stripe("pk_live_QLWcrij9oydqVrpY5HVwTyiI");
        
        // console.log(stripe)
        var elements = stripe.elements();
        
        var style = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };

        var card = elements.create('card', {
            style: style
        });

        card.mount(this.cardElementTarget);

        this._element = card;

        // Handle real-time validation errors from the card Element.
        let controller = this;
        card.addEventListener('change', function (event) {
            var displayError = controller.cardErrorsTarget;
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
            if(event.complete){
                $(controller.formTarget).find("button.submit").removeClass('disabled').attr("disabled", null);
            }
            else{
                $(controller.formTarget).find("button.submit").addClass('disabled').attr("disabled", true);
            }
        });

        // Handle form submission.
        var form = controller.formTarget;
        

        form.addEventListener('ajax:before', function (event) {

            // $(form).find("button.submit").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Loading...').addClass('disabled').attr("disabled", true);
            if(controller.has_stripe_card_token==false){
                event.preventDefault();

                stripe.createToken(card).then(function (result) {

                    controller.stripe_token_fetch_in_progress = false;
  
                    if (result.error) {
                        // Inform the user if there was an error.
                        var errorElement = controller.cardErrorsTarget;
                        errorElement.textContent = result.error.message;
                    } 
                    else {
                        controller.last4 = result.token.card.last4;
                        controller.brand = result.token.card.brand;
                        controller.expMonth = result.token.card.exp_month;
                        controller.expYear = result.token.card.exp_year;
                        // Send the token to your server.
                        controller.stripeTokenHandler(result.token);
                    }
                });
            }

        });


    }

    // Submit the form with the token ID.
    stripeTokenHandler(token) {
        // Insert the token ID into the form so it gets submitted to the server
        var form = this.formTarget;
        var hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'valid_stripe_card_token');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);
        this.has_stripe_card_token = true;
        // Submit the form
        // form.submit();
        Rails.fire(form, 'submit');
    }


    onPostComplete(event){
        event.preventDefault();
        const [xhr, status] = event.detail;
        // console.log("status cahnge:::", status)
        if(status == "OK"){
            //Success
            //Put toast
            $.toast({text: ("Your default payment method has been updated"), position : 'bottom-center'});
            //Update current card data
            let cardAlert = this.formTarget.querySelector(".current-card-alert");
            cardAlert.classList.add("alert-success")
            cardAlert.classList.remove("alert-light", "alert-danger");
            cardAlert.innerHTML = "New payment card: "+this.brand+" "+this.last4+" - expiring "+this.expMonth+"/"+this.expYear;
            //clear stripe data
            this._element.clear();
        }
    }
}