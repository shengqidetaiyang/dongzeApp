/* 
* @Author: Marte
* @Date:   2017-03-27 14:59:06
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-27 17:05:17
*/

$(document).ready(function(){
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
      }) 
      $(".tabBox span").on("touchstart",function(event){
        var e = event || window.event;
        $(this).addClass("tap").siblings().removeClass("tap");
        var index = $(e.target).attr("data-id");
        $(".content>div").eq(index).show().siblings().hide();
      })    
});