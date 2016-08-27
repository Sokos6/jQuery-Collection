$('div.frequency').find('ul').children('li').css({'color':'#dedede', 'font-family': 'tahoma, sans-serif'});
$('div.frequency').find('ul').on('click', function(){
    $('div.apress').find('ul').children('li').last().html('All we need is an attentive reader!');
    $('ul').children('li').last().css({'color':'seagreen'});
});