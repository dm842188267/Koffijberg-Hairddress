/*
* @Author: hp
* @Date:   2019-03-04 13:57:30
* @Last Modified by:   hp
* @Last Modified time: 2019-03-20 09:23:27
*/
var n=0
$('.headnav-btn').click(function(){
	$('.head-nav').toggleClass('head-nav1')
	$('.collapse').hide()
})
$(window).scroll(function(){
	var n=$(window).scrollTop()
	if(n>0){
		$('.down').hide()
	}else{
		$('.down').show()
	}
})
$('.down').click(function(e) {
	e.preventDefault()
	$('html,body').animate({'scrollTop':'800px'})
});
setInterval(function(){
	n++
	var num=$('.caption').index()
	num=n
	if(n>1){
		n=-1
	}
	$('.caption').eq(num).show().addClass('fadeInUp').siblings().hide()
},5000)
var arr=['bg4.jpg','bg3.jpg','bg2.jpg','bg1.jpg','bg5.jpg']
var a=parseInt(Math.random()*arr.length)
console.log(arr[a])
// console.log('../images/'+arr[a])
$('.intro-img').css('background-image','url(images/'+arr[a]+')')