var divFrequency = $('div.frequency');
var ulsInsideFrequency = divFrequency.find('ul');
var lisInsideUl = ulsInsideFrequency.children('li');

lisInsideUl.css({'color':'#dedede', 'font-family': 'tahoma, sans-serif'});
ulsInsideFrequency.on('click', function() {
    var lastLi = lisInsideUl.last();
    lastLi.html('All we need is an attentive reader!').css({'color':'seagreen'});
});