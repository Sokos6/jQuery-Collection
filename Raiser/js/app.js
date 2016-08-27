var divFrequency = $('div.frequency');
var ulsInsideFrequency = divFrequency.find('ul');
var lisInsideUl = ulsInsideFrequency.children('li');

lisInsideUl.css({'color':'#dedede', 'font-family': 'tahoma, sans-serif'});
ulsInsideFrequency.on('click', function() {
    var lastLi = lisInsideUl.last();
    lastLi.html('All we need is an attentive reader!').css({'color':'seagreen'});
});

$('div').find('li').filter(function(index){
    return index == 1;
}).css({'font-family': 'serif', 'color': 'powderblue'});

if($('div').children().is('p')) {
    $('p').children('span').css({'font-family': 'serif', 'color':'turquoise'});
}