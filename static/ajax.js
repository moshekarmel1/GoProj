var $ = jQuery.noConflict();

console.log($);

var obj = $.get('https://testing-plymouth.cs45.force.com/zip/services/apexrest/zip?zip=08088&type=res');
console.log(obj);