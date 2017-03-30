/* 
* @Author: Marte
* @Date:   2017-03-29 18:34:25
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-30 13:54:25
*/

$(document).ready(function(){
    function cal(){
        var lens = $(".goodsBox li").length;
        var total = 0;
        for(var i = 0;i < lens;i++){
            var price = parseFloat($(".goodsBox li").eq(i).find("p").eq(2).find("span").eq(1).text());
            var num = parseInt($(".goodsBox li").eq(i).find(".number").text());
            total = total + price * num; 
        }
        total = parseInt(total * 100) / 100;
        $(".bottom div").find("p").eq(0).text("实付：￥" + total);
    }
    cal();
    $(".plus").on("touchstart",function(){
        var index = $(this).siblings('.number').eq(0).text();
        index++;
        $(this).siblings('.number').eq(0).text(index);
        $(this).parent().parent().siblings('.infor').find("div").eq(1).find("p").eq(1).text(index + "件");
        cal();
    })
    $(".minus").on("touchstart",function(){
        var index = $(this).siblings('.number').eq(0).text();
        index--;
        if(index <= 1){
            index = 1;
        }
        $(this).siblings('.number').eq(0).text(index);
        $(this).parent().parent().siblings('.infor').find("div").eq(1).find("p").eq(1).text(index + "件");
        cal();
    })
    $(".payType").on("touchstart",function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $(".wrap").on("touchstart",function(){
        $(this).find(".inner").toggle();
        $(this).toggleClass('vr');
        if($(this).attr("class").indexOf("vr") > -1){
            $(this).find("input").attr("checked",true);
        }
        else{
            $(this).find("input").removeAttr("checked");            
        }
    })
    
});