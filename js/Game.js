(function(){
	var Game = window.Game =function(){
		this.spanArr=[];
		this.newSpanArr=[];
		this.init();
		this.bindEvent();
		this.fixspan=[];
	}
	Game.prototype.init = function(){
		var span,
		    y=-1,
		    x=0;
		for(var i = 0;i < 16; i++){
			span = $("<span></span>")
			this.spanArr.push(span);
			x = i % 4;
			if(i % 4 == 0) y++;
			this.spanArr[i].addClass("a"+i);
		    this.spanArr[i].css('backgroundPosition',-100*x+'px '+-100*y+'px');
		};	
		$(".pic").append(this.spanArr);
		this.fixspan =this.spanArr;
		console.log(this.fixspan)
	}
	Game.prototype.bindEvent = function(){
		var self=this;
		$(".start").click(function(){
			$(".ready").fadeIn();
			$(".ready").fadeOut(500);
			setTimeout(function(){
			$(".go").fadeIn();
			$(".go").fadeOut(500);
			$(".pic").fadeIn(1800);
			}, 1000)
			setTimeout(function(){
			   $(".pic span").hide();
			   self.update();
			   $(".pic1").fadeIn(1000);
			   $(".pic1 span").fadeIn(1300);
			   console.log(self.fixspan,self.newSpanArr)
			},3000)
			self.drag();
	    })

	}
	 Game.prototype.update =function(){
	          function chongpai(a,b){
	             if(a.length == 1){
	                b.push(a[0]);
	                return b;
	        	    }
	        	    var randomIndex =parseInt(Math.random()*a.length);
	        	    b.push(a[randomIndex]);
	        	    a.splice(randomIndex,1);
	        	    return chongpai(a,b);
	              }
	          chongpai(this.spanArr,this.newSpanArr);
	          $(".pic1").append(this.newSpanArr);
	}
	Game.prototype.drag = function(){
		$('.pic1').sortable();
	} 
})()