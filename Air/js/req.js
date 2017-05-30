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
				mui.toast(xhr.responseText);
			}
		});
	}
}
