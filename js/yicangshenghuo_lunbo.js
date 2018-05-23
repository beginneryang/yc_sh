
var index=0;
var li_len=$('.ban ul li').length;
$('.ban ul li').eq(index).addClass('li_act');

function mov(){
	index++;
	if(index>(li_len-1)){
		index=0;
	}
	$('.ban ul li').eq(index).addClass('li_act').siblings().removeClass('li_act');
}
setInterval(mov,3000);


