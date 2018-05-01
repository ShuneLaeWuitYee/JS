$(function(){
	alert("Hello world");
});

$(function(){
	var msg = $('<div>Hello World</div>');
	$('body').append(msg);
});

$(function(){
	var gb =$('<div id="gid"/>');
	gb.append($('<div/>',{text:'Great Britain'}));
	gb.append($('<img/>',{src:'file:///D:/Web/html/static/flags/gb.gif'}));
	$('#countries').append(gb);
	//$('#countries').attr('id','gid');
});

$(function(){
	$('#fr img').css({
		border: '2px black solid',
		width: '350px'
	});
});

$(function(){
	$('#fi img').css({
		border: '2px black solid',
		width: '350px'
	});
});

$(function(){
	$('#gid img').css({
		border: '2px black solid',
		width: '350px'
	});
});

$(function(){
	var elem=$('<div/>');
	elem.html('An example element');
	elem.css('border','solid blue');
	$('body').append(elem);
});

$(function(){
	$('p:first-child').css('border','solid'); // first paragraph in each block
	//$('p:nth-child(1)').css('border','solid');
	//$('p:eq(1)').css('border','solid');
	$('p:last').css('border','solid');
});

$(function(){
	var ca={
		cname:"A J CUMMING",
		caddress:{
			street:"10 Colinton Rd",
			town:"Edinburgh",
			post_code:"EH14 5DT"
		},
		transaction:[
		{whn:"2014-01-11",nar:"Cash Withdrawal",amt:-100},
		{whn:"2014-01-11",nar:"BUS FARE",amt:-35}
		]
	};
	alert(ca.transaction[1].nar);
})

