//$(function(){
//	
//})
window.onload = function(){
	//获取图片列表
	var imgList = document.getElementById("img-list");
	//获取页面中所有的img标签
	var imgArr = document.getElementsByTagName("img");
	//设置imgList的宽度
	imgList.style.width = 525* imgArr.length + "px";
	
	//设置导航按钮居中
	//获取导航按钮
	var navBtns = document.getElementById("nav-btns");
	//获取 outer
	var outer = document.getElementById("outer");
	//设置navBtns 的左侧值
	navBtns.style.left = (outer.offsetWidth-navBtns.offsetWidth)/2 + "px";
	
	//默认显示图片的索引
	
	var index = 0;
	//获取所有的a
	
	var allA = document.getElementsByTagName("a");
	//设置默认选中的效果
	allA[index].style.backgroundColor = "black";
	
	//点击链接切换图片
	//点击第一个切换第一个
	//点击第一个切换第二个
	
	//为所有的超链接都绑定响应式函数
	for(var i =0; i < allA.length; i++){
		//为每一行的链接都添加一个num属性
		allA[i].num = i;
		
		//为每个链接绑定点击的响应函数
		allA[i].onclick = function(){
			//关闭自动切换的定时器
			clearInterval(timer);
			
			//获取点击连接的索引，并将其设置为index
			
			index = this.num;
			//设置选中的a
			setA();
			
			//使用move函数来切换图片
			move(imgList,"left", -525 * index , 20 , function(){
				
				
				//动画执行完毕，开启自动切换
				autoChange();
			})
		};
	}
	
	//开启自动切换
	autoChange();
	
	//设置选中的a
	function setA(){
		//判断当前索引是否是最后一张图片
		if(index >= imgArr.length-1){
			//则将index设置为0
			index = 0;
			
			//此时显示的最后一张图片，二最后一张图片和第一张是一摸一样的
			//通过css将最后一张切换成第一张
			imgList.style.left = 0;
		}
		//遍历所有的a， 将他们的背景颜色设置为红色
		for(var i = 0; i < allA.length; i++){
			allA[i].style.backgroundColor = "";
		}
		//将选中的a设置为黑色
		allA[index].style.backgroundColor = 'black';
	};
	
	//定义一个自动切换的定时器的标识
	var timer;
	//创建一个函数，用来开启自动切换图片
	function autoChange(){
		//开启一个定时器，用来定时 去切换图片
		timer = setInterval(function(){
			//使索引自增
			index++;
			//判断index的值
			index %= imgArr.length;
			//执行动画，切换图片
			
			move(imgList,"left", -525 * index, 20 , function(){
				//修改导航按钮
				setA();
			});
		},3000);
	}
	

};
