import { Application } from "@hotwired/stimulus"

const application = Application.start();
import { definitionsFromContext } from "stimulus/webpack-helpers"

//window.jQuery = window.$ = require("jquery");

import FixedButton from './controllers/marketing/fixed_button_controller';
application.register('fixed-button', FixedButton);

import Pricing from './controllers/marketing/pricing_controller';
application.register('pricing', Pricing);


import Modal from './controllers/marketing/modal_controller';
application.register('modal', Modal);


import TippyController from "./controllers/dashboard/tippy_controller.js"
application.register("tippy", TippyController);

