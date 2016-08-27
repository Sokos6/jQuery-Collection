(function(){
    var Slipcount = 0,Paragraphcount=0,NParagraphcount=0,aftercount=0;
    $('.js-add-new-slip').on('click',function(){
        Slipcount += 1;
        if(Slipcount<=2){
            var newSlip = '<div class="row">' +
                '<div class="large-4 column">Upload Slip '+parseInt(Slipcount+1)+': </div>'+
                '<div class="large-4 column">'+
                '<input type="file" name="Slip'+parseInt(Slipcount+1)+'">'+
                '</div>'+
                '<div class="large-4 column">'+
                '<input type="submit" value="Upload">'+
                '</div>'+
                '</div>';
            $('#payment-slip').append(newSlip);
        }else{
            alert('You have reached the maximum number of uploads, please refresh your browser');
        }
    });
    $('.js-new-paragraph').on('click',function(){
        Paragraphcount += 1;
        if(Paragraphcount<=2){
            var newParagraph = '<p class="paragraph-'+parseInt(Paragraphcount+1)+'">' +
                'Paragraph '+parseInt(Paragraphcount+1)+':<br><br>'+
                'It is a long established fact that a reader will be more interested in
            having illustrations in text explanations.'+
            '</p>';
            $(newParagraph).appendTo('.paragraph-container');
        }else{
            alert('You have performed the maximum number of uploads, please refresh your'+
                'browser');
        }
    });
    $('.js-new-paragraph2').on('click',function(){

        NParagraphcount += 1;
        if(NParagraphcount<=1){
            var NParagraph = '<p class="Nparagraph-'+parseInt(NParagraphcount+1)+'">' +
                'Paragraph '+parseInt(NParagraphcount+1)+':<br><br>'+
                'This paragraph is coming before selected elements'+
                '</p>';

            $('.Nparagraph1').before(NParagraph);

        }else{
            alert('You have reached the maximum limit, please refresh your browser');
        }
    });
    $('.js-after-paragraph').on('click',function(){

        aftercount += 1;
        if(aftercount<=1){
            var afterParagraph = '<p class="After-paragraph-'+parseInt(aftercount+1)+'">' +
                'Paragraph '+parseInt(aftercount+1)+':<br><br>'+
                'This paragraph is coming after selected elements'+
                '</p>';

            $('.After-paragraph1').after(afterParagraph);

        }else{
            alert('You have reached the maximum limit, please refresh your browser');
        }
    });

})(jQuery);