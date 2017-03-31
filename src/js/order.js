/* 
* @Author: Marte
* @Date:   2017-03-31 09:58:41
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-31 10:21:15
*/

$(document).ready(function(){
    $("nav a").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    
});