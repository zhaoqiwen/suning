//禁止复制
let html = document.querySelector("html");
html.onselectstart = function() {
	return false;
}
//禁止复制结束
// 搜索开始
let search = document.querySelector("#search");
let searchOnclick = document.querySelector(".search_onclick");
search.onfocus = function() {
	this.value = "";
	searchOnclick.style.display = "block";
}
search.onblur = function() {
	this.value = "走亲访友拜大年";
	searchOnclick.style.display = "none";
}
//搜索结束
//banner开始
let pictures = document.querySelectorAll(".ng_nav_banner>ul>li");
let picturesBox = document.querySelector(".ng_nav_banner");
let yuans = document.querySelectorAll(".ng_nav_banner_yuan>.yuan");
let left_btn = document.querySelector(".ng_nav_banner_left_btn");
let right_btn = document.querySelector(".ng_nav_banner_right_btn");
let n = 0;
let flag = true;
let stop = setInterval(function() {
	n++;
	limove();
}, 3000)
left_btn.onclick = function() {
	if (flag) {
		flag = false;
		n--;
		limove();
	}
}
right_btn.onclick = function() {
	if (flag) {
		flag = false;
		n++;
		limove();
	}
}
picturesBox.onmouseover = function() {
	clearInterval(stop);
}
picturesBox.onmouseout = function() {
	stop = setInterval(function() {
		n++;
		limove();
	}, 3000)
}
yuans.forEach(function(val, index) {
	val.onmouseover = function() {
		if (flag) {
			clearInterval(stop);
			flag = false;
			n = index;
			limove();
		}
	}
})

function limove() {
	if (n > 7) {
		n = 0;
	}
	if (n < 0) {
		n = 7;
	}
	pictures.forEach(function(val) {
		val.style.opacity = 0;
		val.style.zIndex = 1;
	})
	yuans.forEach(function(a) {
		a.classList.remove("ng_nav_banner_yuan_active");
	})
	pictures[n].style.opacity = 1;
	pictures[n].style.zIndex = "5";
	yuans[n].classList.add("ng_nav_banner_yuan_active");
}
picturesBox.addEventListener("transitionend", function() {
	flag = true;
});
//banner结束


//banner_left_detali开始
// let bannerLis = document.querySelectorAll(".ng_nav_left>ul>li");
// let bannerDetali = document.querySelectorAll(".ng_nav_left_detal");
// bannerLis.forEach(function(val, index) {
// 	val.onmouseover = function() {
// 		bannerDetali[index].style.width = "1800px";
// 	}
// 	val.onmouseout = function() {
// 		bannerDetali[index].style.width = "0px";
// 	}
// })
//banner_left_detali结束



//抢购开始
let ruBigBottom = document.querySelector(".rush_to_buy_bottom");
let rushLeftBtn = document.querySelector(".rush_to_buy_left_btn");
let rushRightBtn = document.querySelector(".rush_to_buy_right_btn");
let rushBig = document.querySelector(".rush_to_buy_bottom_box");
let n1 = -1;
let ruFlag = true;
ruBigBottom.onmouseover = function(e) {
	e.target.style.cursor = "pointer";
}
rushRightBtn.onclick = function() {
	if (ruFlag) {
		ruFlag = false;
		n1--;
		rushMove();
	}
}
rushLeftBtn.onclick = function() {
	if (ruFlag) {
		ruFlag = false;
		n1++;
		rushMove();
	}
}

function rushMove() {
	rushBig.style.transition = "0.5s";
	rushBig.style.left = n1 * 1000 + "px";
}
rushBig.addEventListener("transitionend", function() {
	if (n1 > -1) {
		rushBig.style.transition = "0s";
		rushBig.style.left = "-300%";
		n1 = -3;
	}
	if (n1 < -3) {
		rushBig.style.transition = "0s";
		rushBig.style.left = "-100%";
		n1 = -1;
	}
	ruFlag = true;
}) //第一个时间段结束
//整体选项卡开始
let ruLis = document.querySelectorAll(".rush_to_buy_time_point");
let ruBottom = document.querySelectorAll(".rush_to_buy_bottom_big");
ruLis.forEach(function(val, index) {
	val.onmouseover = function() {
		ruLis.forEach(function(a, b) {
			a.classList.remove("active2");
			ruBottom[b].style.display = "none";
		})
		val.classList.add("active2");
		ruBottom[index].style.display = "block";
	}
})
//抢购结束
// sn_column开始
//sn_ml
let mlUl = document.querySelector(".sn_column_ml_bottom>ul");
let mlYuans = document.querySelectorAll(".sn_column_ml_yuans .yuan");
let mlLeft = document.querySelector(".sn_column_ml_bottom .sn_column_ml_left_btn");
let mlRight = document.querySelector(".sn_column_ml_bottom .sn_column_ml_right_btn");
let mlBox = document.querySelector(".sn_column_ml_bottom");
let n2 = 1;
let mlflag = true;
let mlStop = setInterval(function() {
	n2++;
	mlMove();
}, 2000)
mlBox.onmouseover = function() {
	clearInterval(mlStop);
}
mlBox.onmouseout = function(){
	mlStop = setInterval(function() {
		n2++;
		mlMove();
	}, 2000)
}
mlRight.onclick = function() {
	if (mlflag) {
		mlflag = false;
		n2++;
		mlMove();
	}
}
mlLeft.onclick = function() {
	if (mlflag) {
		mlflag = false;
		n2--;
		mlMove();
	}
}

function mlMove() {
	mlUl.style.transition = "0.5s";
	mlUl.style.left = n2 * -390 + "px";

}
mlUl.addEventListener("transitionend", function() {
	mlflag = true;
	if (n2 > 3) {
		mlUl.style.transition = "0s";
		mlUl.style.left = "-390px";
		n2 = 1;
	}
	if (n2 < 1) {
		mlUl.style.transition = "0s";
		mlUl.style.left = 3 * -390 + "px";
		n2 = 3;
	}
})
// sn_ml
// sn_column结束
// top开始
let root = document.documentElement;
let main = document.querySelector("main");
let mainDivs = document.querySelectorAll("main>div");
let mainoffsetTop = main.offsetTop - window.innerHeight;
let footer = document.querySelector(".footer");
let maxHeight = footer.offsetTop + footer.offsetHeight - 700;
let snTop = document.querySelector(".sn_top");
let snTopLis = document.querySelectorAll(".sn_top>ul>li");
let Top = document.querySelector(".top_box");
let snSpeed = 20;
let topFlag = true;
window.onscroll = function(){
	if(root.scrollTop >= mainoffsetTop && root.scrollTop <= maxHeight){
		snTop.style.display = "block";
		mainDivs.forEach(function(val,index){
			if(topFlag){
				if(root.scrollTop+20>=val.offsetTop && root.scrollTop<=val.offsetTop+val.offsetHeight){
					snTopLis[index].classList.add("sn_active");
				}else{
					snTopLis[index].classList.remove("sn_active");
				}
			}
		})
	}else{
		snTop.style.display = "none";
	}
	
}
snTopLis.forEach(function(val,index){
	val.onclick = function(){
		topFlag = false;
		if(mainDivs[index].offsetTop>root.scrollTop){
			snSpeed = 20;
		}else{
			snSpeed = -20;
		}
	snTopLis.forEach(function(a){
		a.classList.remove("sn_active");
	})
	val.classList.add("sn_active");
	let snTime1 = setInterval(function(){
		if(root.scrollTop + snSpeed>=mainDivs[index].offsetTop && snSpeed>0){
			clearInterval(snTime1);
			topFlag = true;
		}else if(root.scrollTop<=mainDivs[index].offsetTop && snSpeed<0){
			clearInterval(snTime1);
			topFlag = true;
		}else{
			move();
		}
	},10)
	
}
})
Top.onclick = function(){
	snSpeed = -400;
	let snTime2 = setInterval(function(){
		if(root.scrollTop == "0"){
			clearInterval(snTime2);
		}else{
			move();
		}
	},10)
	
}
function move(){
	root.scrollTop = root.scrollTop + snSpeed;
}






// top结束