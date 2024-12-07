import { Application } from "@hotwired/stimulus"

const application = Application.start();
import { definitionsFromContext } from "stimulus/webpack-helpers"
// const context = require.context("../controllers/marketing/", true, /\.js$/)


import TippyController from "./controllers/dashboard/tippy_controller.js"
application.register("tippy", TippyController);

import RevealController from "./controllers/dashboard/reveal_controller.js"
application.register("reveal", RevealController);

window.jQuery = window.$ = require("jquery");

window.ParsleyConfig = { excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]:not(.still-validate-if-hidden), [disabled], :hidden:not(.still-validate-if-hidden)" };
require("parsleyjs");

import PricingController from "./controllers/marketing/pricing_controller.js"
application.register("pricing", PricingController);

import ParsleyController from "./controllers/dashboard/parsley_controller.js"
application.register("parsley", ParsleyController);



// const context = require.context("./controllers/onboarding/", true, /\.js$/);
// application.load(definitionsFromContext(context));


import Address from './controllers/onboarding/address_controller.js';
application.register('address', Address);

import Dropzone from './controllers/onboarding/dropzone_controller.js';
application.register('dropzone', Dropzone);

import EinFormatter from './controllers/onboarding/ein_formatter_controller.js';
application.register('ein-formatter', EinFormatter);

import PhoneNumber from './controllers/onboarding/phone_number_controller.js';
application.register('phone-number', PhoneNumber);

import PhoneNumberSelector from './controllers/onboarding/phone_number_selector_controller.js';
application.register('phone-number-selector', PhoneNumberSelector);

import Stripe from './controllers/onboarding/stripe_controller.js';
application.register('stripe', Stripe);

import Timezone from './controllers/onboarding/timezone_controller.js';
application.register('timezone', Timezone);



window.spinnerSvg = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_P7sC{transform-origin:center;animation:spinner_svv2 .75s infinite linear}@keyframes spinner_svv2{100%{transform:rotate(360deg)}}</style><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_P7sC"/></svg>';
window.Parsley.addValidator(
  'minwords',
  function (value, nbWords) {
  	var countWords = function (string) {
	  return string
	      .replace( /(^\s*)|(\s*$)/gi, "" )
	      .replace( /\s+/gi, " " )
	      .split(' ').length;
	};
    return countWords(value) >= nbWords;
  }, 32).addMessage('en', 'minwords', 'Please enter your full name');

window.Parsley.addValidator("validPhoneNumber", {
   validateString : function(value, requirement) {
      if(window.intlTelInputUtils.isValidNumber(value, "US")){
      	return true;
      }
      return false;
   },
   messages: {
   	en: "Please enter a valid US mobile phone number"
   }
});
Parsley.on('form:submit', function(ParsleyForm) {
   // var form = ParsleyForm.$element[0];
   // var event = document.createEvent('Event');
   // event.initEvent('form:submit', true, true); //can bubble, and is cancellable
   // form.dispatchEvent(event);
   // alert("parsley submit")
   console.log("ParsleyForm.$element.find('button'):", ParsleyForm.$element.find('button'))
	ParsleyForm.$element.find('button').addClass("disabled");
});


import "@hotwired/turbo";
import { Turbo, cable } from "@hotwired/turbo-rails";
Turbo.session.drive = false;


// application.load(definitionsFromContext(context))