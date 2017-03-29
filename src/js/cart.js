/* 
* @Author: Marte
* @Date:   2017-03-28 15:01:50
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-29 18:28:00
*/

$(document).ready(function(){
var flagAll = false;
function cal(arr){
    var total = 0;
    for(var i = 0;i < arr.length;i++){
        if(arr[i] == 1){
            var temp = $(".goodsList li").eq(i).find(".price-new").find(".num").text();
            var num = parseInt($(".goodsList li").eq(i).find(".number").text());
            temp = temp * num;
            total += temp; 
        }
    }
    total = parseInt(total*100)/100;
    $(".money").text("合计￥" + total);
}

var lens = $(".goodsList li").length;
var arrayB = [];
 if(window.localStorage.getItem("arrayB")){//如果缓存中有存储数组信息则取缓存取到的内容为“1,2,3”
    var m = window.localStorage.getItem("arrayB");
    n = m.replace(new RegExp(',','gm'),'');//将m中的","去掉
    for(var l = 0;l < n.length;l++){
        var tt = parseInt(n.slice(l,l+1));
        if(tt ==1){
            $(".goodsList .select-icon").eq(l).addClass('sel-active');  
            $(".goodsList .select-icon").eq(l).find("input").attr("checked",true);
        }
        arrayB.push(tt);//将标志位重新压入数组
    }
    cal(arrayB);//计算此时总的价格
}
 else{//如果没有在缓存写过信息则全部置为0
   for(var i = 0;i < lens;i++){
    arrayB.push(0);
}; 
cal(arrayB); 
}
$(".goodsList .select-icon").each(function(index,ele){
    var count = 0;
    $(ele).on("touchstart",function(){
        var flag = arrayB[index];
        if(flag == 0){
            flag = 1;
            arrayB[index] = 1;
            window.localStorage.setItem("arrayB",arrayB);
            cal(arrayB);
            $(this).find("input").attr("checked",true); 
            $(this).addClass("sel-active");
        }
        else if(flag == 1){
            flag = 0;
            arrayB[index] = 0;
            window.localStorage.setItem("arrayB",arrayB);
            cal(arrayB);
            $(this).find("input").removeAttr("checked");
            $(this).removeClass("sel-active");
        }
    })
})
$(".sel-all").on("click",function(){
       $(this).toggleClass('sel-all-active');
       if(flagAll == 0){
            flagAll = 1;
            arrayB = [];
            for(var i = 0;i < lens;i++){
                   arrayB.push(1);
                };  
           window.localStorage.setItem("arrayB",arrayB);
           cal(arrayB);
            $(".select-icon").each(function(index,ele){
                   $(ele).find("input").attr("checked",true);
                   $(ele).addClass("sel-active");
            })  
       }
       else if(flagAll == 1){
            flagAll = 0;
            arrayB = [];
            for(var i = 0;i < lens;i++){
                   arrayB.push(0);
                };  
            window.localStorage.setItem("arrayB",arrayB);
            cal(arrayB);
            $(".select-icon").each(function(index,ele){
                   $(ele).find("input").removeAttr("checked");
                   $(ele).removeClass("sel-active");
            })   
       }
})

$(".searchBox .right").on("touchstart",function(){
    $(this).hide();
    $(".goods-words").hide();
    $(".goods-price").hide();
    $(".sel-cal").hide();
    $(".sel-total").hide();
    $(".choose-box").fadeIn();
    $(".goods-del").fadeIn();
    $(".sel-del").fadeIn();
    $(".searchBox .finish").fadeIn();
})
$(".searchBox .finish").on("touchstart",function(){
    $(".searchBox .right").fadeIn();
    $(".goods-words").fadeIn();
    $(".goods-price").fadeIn();
    $(".sel-cal").fadeIn();
    $(".sel-total").fadeIn();

    $(".choose-box").hide();
    $(".goods-del").hide();
    $(".sel-del").hide();
    $(this).hide();
})
$(".goods-del").each(function(index,ele){
    $(ele).on("touchstart",function(){
        $(this).parent().remove();
        arrayB.splice(index,1);
        window.localStorage.setItem("arrayB",arrayB); 
        lens = $(".goodsList li").length;     
    })
})
$(".sel-num .plus").on("touchstart",function(){
    var index = parseInt($(this).parent().find(".num").text());
    index++;
    $(this).parent().find(".num").text(index);
})
$(".sel-num .minus").on("touchstart",function(){
    var index = parseInt($(this).parent().find(".num").text());
    index--;
    if(index <= 1){
        index = 1;
    }
    $(this).parent().find(".num").text(index);    
})
$(".sel-del").on("touchstart",function(){
    $(".goodsList li").remove();    
    $(".goodsList").hide();
    $(".cal-bottom").hide();
    $(".noGoods").show();
    $(".searchBox").hide();
})

});