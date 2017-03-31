/* 
* @Author: Marte
* @Date:   2017-03-30 16:23:43
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-30 18:08:31
*/

$(document).ready(function(){
    $(".list .wrap").on("touchstart",function(){
        $(this).toggleClass('active');
        if($(this).attr("class").indexOf("active") > -1){
            $(this).find("input").attr("checked",true);
        }
        else{
            $(this).find("input").removeAttr("checked");
        }
    })   
});