/* 
* @Author: Marte
* @Date:   2017-03-27 14:12:02
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-27 14:41:51
*/

$(document).ready(function(){
    $(".list span").on("touchstart",function(event){
        var e = event || window.event;
        $(this).addClass('select').siblings().removeClass("select");
        var target = e.target;
        console.log($(target).attr("data-id"));
    })
    
});