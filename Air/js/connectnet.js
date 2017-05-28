var ajax = function(){
	mui.ajax('http://47.92.108.119:80/spring-mybatis-demo/getCust/202',{
		data:{
			username:'admin',
			password:'admin'
		},
		dataType:'json',
		type:'get',
		timeout:10,
		headers:{'Content-Type':'application/json'},
		success:function(data){
			console.log(data)
		},
		error:function(xhr,type,errorThrown){
			console.log(type);
		}
	});
}
