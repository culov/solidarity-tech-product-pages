import 'core-js/stable'
import 'regenerator-runtime/runtime'

//Bootstrap
import './stylesheets/account.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


import { config, library, dom } from '@fortawesome/fontawesome-svg-core'
// Prevents flicker when using Turbolinks
// Ref: https://github.com/FortAwesome/Font-Awesome/issues/11924
config.mutateApproach = 'sync';
dom.watch();



window.jQuery = window.$ = require("jquery");
var toast = require("jquery-toast-plugin");
require("./stylesheets/account.scss");


//Stimulus
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
const application = Application.start()
// const context = require.context("../controllers/account/", true, /\.js$/)
// application.load(definitionsFromContext(context))

import DonationsManager from './controllers/account/donations_manager_controller';
application.register('donations-manager', DonationsManager);

import Stripe from './controllers/account/stripe_controller';
application.register('stripe', Stripe);


import "@hotwired/turbo";
import { Turbo, cable } from "@hotwired/turbo-rails";

var Rails = require('@rails/ujs');
Rails.start();
window.Rails = Rails;


// let self = this;
