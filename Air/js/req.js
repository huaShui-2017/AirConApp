var gParam = {};//全部参数
gParam.currentMachId = 1001;//当前机器ID，默认1001

var httpReq = {
	getData: function(doSuccess){
		mui.ajax('http://47.92.108.119:80/spring-mybatis-demo/getCust/202',{
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},	              
			success:function(data){
				doSuccess(data);
			},
			error:function(xhr,type,errorThrown){
				//mui.toast(xhr.responseText);
			}
		});
	},
	// 4.1接口
	queryAirUnitMsg: function(doSuccess){
		mui.ajax('http://47.92.108.119:80/spring-mybatis-demo/queryAirUnitMsg/' + gParam.currentMachId,{
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},	 
			cache: false,
			success:function(data){
				doSuccess(data);
			},
			error:function(xhr,type,errorThrown){
				mui.toast("请求失败！" + xhr.responseText);
			}
		});
	},
	//1.2接口
	login: function(doSuccess){
		mui.ajax('http://47.92.108.119:80/spring-mybatis-demo/loginIn/13311155444/passwd/9999',{
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},	              
			success:function(data){
				doSuccess(data);
			},
			error:function(xhr,type,errorThrown){
				mui.toast("请求失败！" + xhr.responseText);
			}
		});
	}
}
