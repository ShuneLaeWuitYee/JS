$(function(){
	$('#key th').css('color','red');
	//$('#key th').
});

$(function(){
	$('body').append($('<div>Hide key </div>'));
	/*$('body').prepend($('<div/>',{text:'Hide key',css:{color:'blue', cursor:'pointer'},
		click:function(){
		$('#key').toggle();
	}
}));*/
	$('body').prepend($('<div/>',
		{text:'Hide key',
		css:{color: 'blue',
		cursor:'pointer'},click:function(){
			if ($('#key:visible').length==1){
				$('#key').fadeOut('slow');
				$(this).text('Show Key');
			}
			else{
				$('#key').fadeIn('slow');
				$(this).text('Hide Key');
			}
		}}))
});

$(function(){
	//$('.t1 td').css('background-color','gray');
	$('.t1 td').css('color','black');
	$('.t1 td').css('text-align','center');
	//$('td').width(60);
	$('td').height(30);
});
$(function(){
	$('table td:not(:empty)').mouseover(function(){
		$(this).css('background','red');
	});
	$('table td').mouseout(function(){
		$(this).css('background','inherit');
	});
});

