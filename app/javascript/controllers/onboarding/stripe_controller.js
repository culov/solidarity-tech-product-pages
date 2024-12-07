
import {
    Controller
} from "stimulus"


export default class extends Controller {
    static targets = ["submitButton", "cardElement", "cardErrors", "form"];
    static values = {postTokenUrl: String};
    // const stripe = await loadStripe('pk_live_QLWcrij9oydqVrpY5HVwTyiI');


    serializeHash = function () {
        var attrs = {};
        $.each($(this).serializeArray(), function(i, field) {
            attrs[field.name] = field.value;
        });
        return attrs;
    };

    connect() {

        var stripe = Stripe("pk_test_h1AKPZVQXZH1dwTTl4uEy1Qo");
        $.fn.extend({ serializeHash: this.serializeHash });
        // Create an instance of Elements.
         // Custom styling can be passed to options when creating an Element.
        // (Note that this demo uses a wider set of styles than the guide below.)
        var style = {
            base: {
                color: '#000',
                lineHeight: '18px',
                fontFamily: 'Inter, "Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#667085'
                }
            },
            invalid: {
                color: '#b42318',
                iconColor: '#b42318'
            },
            theme: 'none',
            rules: {
              '.Input:focus': {
                border: '1px solid red',
                boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02)',
              },


              // See all supported class names and selector syntax below
            }
        };

        var elements = stripe.elements({
          fonts: [
            {
              // integrate your font into stripe
              cssSrc: 'https://fonts.googleapis.com/css?family=Inter:500,600',
            },
          ],
          style: style
        });



        var self = this;
        // Create an instance of the card Element.
        var card = elements.create('card', {
            style: style,
            hidePostalCode: true,
        });

        // Add an instance of the card Element into the `card-element` <div>.
        card.mount(this.cardElementTarget);

        this.cardIsValid = false;
        // Handle real-time validation errors from the card Element.
        card.addEventListener('change', function(event) {
            var displayError = self.cardErrorsTarget;
            if (event.error) {
                displayError.textContent = event.error.message;
                self.cardIsValid = false;
            } else {
                displayError.textContent = '';
                self.cardIsValid = true;
            }
        });

        
        // Handle form submission.
        // var form = document.getElementById('payment-form');

        $(this.formTarget).parsley().on('form:success', function(event) {
           
            // console.log("event:", event)
            event.submitEvent.preventDefault();
            // event.validationResult = false
            
            $(self.submitButtonTarget).attr("disabled", true).addClass("disabled");

            var data = $(event.element).serializeHash();
   

            var stripeData = Object.keys(data).filter((key) => ["name", "address_line1", "address_line2", "address_city", "address_state", "address_zip", "address_country"].includes(key)).reduce((cur, key) => { return Object.assign(cur, { [key]: data[key] })}, {});
            
            // console.log("stripeData:", stripeData)

            stripe.createToken(card, stripeData).then(function(result) {
                if (result.error) {
                    // Inform the user if there was an error.
                    var errorElement = self.cardErrorsTarget;
                    errorElement.textContent = result.error.message;
                    $(self.submitButtonTarget).attr("disabled", false).removeClass("disabled");
                } else {
                    // Send the token to your server and create customer
                    // stripeTokenHandler(result.token);
                    // console.log(result)

                    // var params = {
                    //     token: result.token.id
                    // } 4-6 weeks here, 6 weeks in LA

                    data["token"] = result.token.id;

                    data["last4"] = result.token.card.last4;
                    data["stripe_card_id"] = result.token.card.id;
                    data["brand"] = result.token.card.brand;
                    data["country"] = result.token.card.country;

                    data["client_ip"] = result.token.client_ip;
                    data["exp_month"] = result.token.card.exp_month;
                    data["exp_year"] = result.token.card.exp_year;



                    self.formSubmitWithAdditionalCardParams(data)
                

                }
            });
        });


    }

    formSubmitWithAdditionalCardParams(cardParams) {

      // The rest of this code assumes you are not using a library.
      // It can be made less verbose if you use one.
      const form = document.createElement('form');
      const existingForm = this.formTarget;

      form.method = existingForm.method;
      form.action = existingForm.action;

      let existingParams = {...$(existingForm).serializeHash(), ...cardParams}; //$(existingForm).serialize().merge(cardParams)

      for (const key in existingParams) {
        if (existingParams.hasOwnProperty(key)) {
          const hiddenField = document.createElement('input');
          hiddenField.type = 'hidden';
          hiddenField.name = key;
          hiddenField.value = existingParams[key];

          form.appendChild(hiddenField);
        }
      }
      document.body.appendChild(form);
      form.requestSubmit();
    }


}