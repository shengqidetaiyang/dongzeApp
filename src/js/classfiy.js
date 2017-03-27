/* 
* @Author: Marte
* @Date:   2017-03-27 10:07:01
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-27 14:04:02
*/

$(document).ready(function(){
    $(".content .leftBox p").on("touchstart",function(){
        $(this).parent().find(".border").removeClass('borderCol');
        $(this).find(".border").addClass('borderCol');
    })
});