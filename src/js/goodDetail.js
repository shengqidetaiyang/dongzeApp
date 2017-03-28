/* 
* @Author: Marte
* @Date:   2017-03-27 14:59:06
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-28 10:43:47
*/

$(document).ready(function(){
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
      }) 
      var index = 1;
      $(".tabBox span").on("touchstart",function(event){
        var e = event || window.event;
        $(this).addClass("tap").siblings().removeClass("tap");
        var index = $(e.target).attr("data-id");
        $(".content>div").eq(index).show().siblings().hide();
      })    
      $(".buySoon").on("touchstart",function(){
        $(".numChoose").fadeIn();
      })
      $(".close").on("touchstart",function(){
        $(".numChoose").fadeOut();
      })
      $(".numChoose .select span").on("touchstart",function(){
        $(this).addClass("s-this").siblings().removeClass("s-this");
      })
      $(".numChoose .minus ").on("touchstart",function(){
        index--;
        if(index <=1){
            index = 1;
        }
        $(".number").text(index);
      })
      $(".numChoose .plus").on("touchstart",function(){
        index++
        $(".number").text(index);
      })
});