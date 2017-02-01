var clickedTime; var createdTime; var reactionTime; 
		
		function getRandomColor() {
			var letters = "0123456789ABCDEF".split("");
			var color = "#";
			for (var i = 0; i < 6; i++) {
				color += letters[Math.round(Math.random() * 15)];
				}
			if (color == 0) {
				for (var i = 0; i < 6; i++) {
				color += letters[Math.round(Math.random() * 15)];
				}
				}
				return color;
		}
		
		//times and makes the box function
		
		function makeBox() {
		
			var time=Math.random();
	
			time = time * 3000;
	
			setTimeout(function() {
			
			document.getElementById("box").style.backgroundColor = getRandomColor();
			
			if (Math.random() > 0.5) {
			
				document.getElementById("box").style.borderRadius = "10em";
				} else {
				
				document.getElementById("box").style.borderRadius = "0";			
				};
			
				var top=Math.random();
				
				top = top*65;
				
				var left=Math.random();
				
				left=left*65;
				
			document.getElementById("box").style.top=top+"%";
			
			document.getElementById("box").style.left=left+"%";
			
			document.getElementById("box").style.display="block";
			
			createdTime = Date.now();
			}, time);
	
		}
		//times and makes the box function
		
		//click time function
			document.getElementById("box").onclick=function (){
		
			clickedTime = Date.now();
		
			reactionTime = (clickedTime - createdTime) / 1000;
		
			document.getElementById("yTime").innerHTML = reactionTime;
		
			this.style.display="none";
			
			if (reactionTime < document.getElementById("qTime").innerHTML) {
				document.getElementById("qTime").innerHTML=reactionTime
			}
		
			makeBox();
			
			}
		//click time function
		

			makeBox();