define(function(require, exports, module) {

var $ = require('jquery');
var backbone = require('backbone');
var marionette = require('marionette');
var vent = require('built/app/vent').vent;
var modals = require('built/app/modals');
var activity = require('built/app/activity');
var keys = require('built/app/keys');
var app = require('app/app');

var AppController = marionette.Controller.extend({

    initialize: function(options){
        this.app = app;
    },

    index: function(){
    }
});

exports.AppController = AppController;
});
