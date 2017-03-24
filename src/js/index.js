/* 
* @Author: Marte
* @Date:   2017-03-24 13:36:26
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-24 15:47:46
*/

$(document).ready(function(){
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
      })  
    $(".Grid-cell").on("touchstart",function(){
        $(this).addClass('active').siblings('.Grid-cell').removeClass('active');
    })
});