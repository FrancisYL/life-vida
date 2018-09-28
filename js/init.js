(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        //悬停提示
        $(document).ready(function(){
            $('.tooltipped').tooltip({
                delay: 50
            });
        });

        //下拉菜单
        $('.dropdown-button').dropdown({
            inDuration: 750,
            outDuration: 750,
            constrain_width: true,
            hover: true,
            gutter: 0,
            belowOrigin: true,
            alignment: 'left'
        });

        //图片轮播
        $(document).ready(function(){
            $('.slider').slider({
                full_width: true,
                indicators: true,
                heigh: 400,
                transition: 500,
                interval: 3000
            });
        });

        //图片点击轮播
        $('.carousel.carousel-slider').carousel({full_width: true});

        //标签事件
        $(document).ready(function(){
            $('ul.tabs').tabs();
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space


//时钟
function showLocal(today) {
    var str;
    var year = today.getYear();
    if(year<1900) year = year+1900;
    var month = today.getMonth()+1;
    if(month<10) month = '0' + month;
    var day = today.getDate();
    if(day<10) day = '0' + day;
    var hour = today.getHours();
    if(hour<10) hour = '0' + hour;
    var minute = today.getMinutes();
    if(minute<10) minute = '0' + minute;
    var second = today.getSeconds();
    if(second<10) second = '0' + second;
    str = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    return(str);
}
function showDateTime() {
    var today;
    today = new Date();
    document.getElementById("datetime_id").innerHTML = showLocal(today);
    setTimeout("showDateTime()", 1000);
}
showDateTime();


//换肤
function red_lighten1() {
    document.getElementById("color_change_button_id").setAttribute("class","btn-floating btn-large red lighten-1");
	document.getElementById("navigation_id").setAttribute("class","red lighten-1");
    document.getElementById("flash_on_id").setAttribute("class","red-text lighten-1");
    document.getElementById("group_id").setAttribute("class","red-text lighten-1");
    document.getElementById("settings_id").setAttribute("class","red-text lighten-1");
}
function yellow_darken1() {
    document.getElementById("color_change_button_id").setAttribute("class","btn-floating btn-large yellow darken-1");
    document.getElementById("navigation_id").setAttribute("class","yellow darken-1");
    document.getElementById("flash_on_id").setAttribute("class","yellow-text darken-1");
    document.getElementById("group_id").setAttribute("class","yellow-text darken-1");
    document.getElementById("settings_id").setAttribute("class","yellow-text darken-1");
}
function teal_lighten1() {
    document.getElementById("color_change_button_id").setAttribute("class","btn-floating btn-large teal lighten-1");
    document.getElementById("navigation_id").setAttribute("class","teal lighten-1");
    document.getElementById("flash_on_id").setAttribute("class","teal-text lighten-1");
    document.getElementById("group_id").setAttribute("class","teal-text lighten-1");
    document.getElementById("settings_id").setAttribute("class","teal-text lighten-1");
}
function lightblue_darken2() {
    document.getElementById("color_change_button_id").setAttribute("class","btn-floating btn-large light-blue darken-2");
    document.getElementById("navigation_id").setAttribute("class","light-blue darken-2");
    document.getElementById("flash_on_id").setAttribute("class","light-blue-text darken-2");
    document.getElementById("group_id").setAttribute("class","light-blue-text darken-2");
    document.getElementById("settings_id").setAttribute("class","light-blue-text darken-2");
}
