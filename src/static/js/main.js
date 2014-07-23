define(function(require, exports, module){

var $ = require('jquery');
var marionette = require('marionette');
var renderer = require('app/renderer');
var app = require('app/app');
var AppRouter = require('app/app-router').AppRouter;

app.appRouter = new AppRouter();

$(function(){
    app.start();
});

}); // eof define

