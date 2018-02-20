
var Handlebars = require('handlebars/runtime.js');

// register dynamic partials
var myPartialTemplate1 = require("./partials/_myPartial1.handlebars");
var myPartialTemplate3 = require("./partials/_myPartial3.handlebars");

Handlebars.partials['myPartial1'] = myPartialTemplate1;
Handlebars.partials['myPartial2'] = require("./partials/_myPartial2.handlebars");
Handlebars.registerPartial('myPartial3', myPartialTemplate3);

var Template = require("./template.handlebars");

document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = Template({
        title: 'my title!',
        items: [{
            title: 'partial1',
            partial: 'myPartial1'
        }, {
            title: 'partial2',
            partial: 'myPartial2'
        }, {
            title: 'partial3',
            partial: 'myPartial3'
        }]
    });
    document.body.appendChild(div);
});