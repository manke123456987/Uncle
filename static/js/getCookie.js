function setCookie(name,value,day,path,isSafe){
	var str = "";
	str = encodeURIComponent(name)+ "="+encodeURIComponent(value);
	if(path){
		str+=';path'+path;
	}	
	if(day){
		var now = new Date();
		now.setDate(now.getDate()+day);
		str+=";expires="+now;
	}
	if(isSafe){
		str+=";secure";
		document.cookie = str;
	}
}
	function getCookie(name){
		var str = decodeURIComponent(document.cookie);
		var array = str.split(";");
		var key_value;
		for(var i = 0;i < array.length;i++){
			key_value=array[i].split("=");
			if(key_value[0]===name){
				return key_value[1];
			}
		}
		return '';
	}
	// function removeCookie(name){
	// 	console.log(typeof name)
	// 	setCookie(name,'');
	// 	console.log(getCookie(name)
	// }
  //删除cookie中所有定变量函数    
       function delAllCookie(){    
            var myDate=new Date();    
            myDate.setTime(-1000);//设置时间    
            var data=document.cookie;    
            var dataArray=data.split("; ");    
            for(var i=0;i<dataArray.length;i++){    
                 var varName=dataArray[i].split("=");    
                 document.cookie=varName[0]+"=''; expires="+myDate.toGMTString();    
            }    
                          
      }          
      // alert(getCookie("wangsan"));    
      // alert(getCookie("lisi"));    
      // delAllCookie();//删除所有cookie变量    
      // alert(getCookie("wangsan"));    
      // alert(getCookie("lisi"));    