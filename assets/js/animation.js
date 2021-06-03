AOS.init();
var CharTimeout = 50; // скорость печатания
	var StoryTimeout = 1500; // время ожидания перед переключением

	var Summaries = new Array();
	var SiteLinks = new Array();

		Summaries[0] = 'Подбор запчастей';
        Summaries[1] = 'Лучшие запчасти';
		

	function startTicker(){
		massiveItemCount =  Number(Summaries.length);
		CurrentStory     = -1;
		CurrentLength    = 0;
		AnchorObject     = document.getElementById("Ticker");
		runTheTicker();     
	}
	function runTheTicker(){
		var myTimeout;  
		if(CurrentLength == 0){
			CurrentStory++;
			CurrentStory      = CurrentStory % massiveItemCount;
			StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');      
			AnchorObject.href = SiteLinks[CurrentStory];
		}
		AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + znak();
		if(CurrentLength != StorySummary.length){
			CurrentLength++;
			myTimeout = CharTimeout;
		} else {
			CurrentLength = 0;
			myTimeout = StoryTimeout;
		}
		setTimeout("runTheTicker()", myTimeout);
	}
	function znak(){
		if(CurrentLength == StorySummary.length) return "";
		else return "|";
	}

startTicker();

var CharTimeout1 = 50; // скорость печатания
	var StoryTimeout1 = 1500; // время ожидания перед переключением

	var Summaries1 = new Array();
	var SiteLinks1 = new Array();

		Summaries1[0] = 'Ваша реклама';
        Summaries1[1] = 'Вы -- лучшие клиенты';
		

	function startTicker1(){
		massiveItemCount1 =  Number(Summaries1.length);
		CurrentStory1     = -1;
		CurrentLength1    = 0;
		AnchorObject1     = document.getElementById("Ticker1");
		runTheTicker1();     
	}
	function runTheTicker1(){
		var myTimeout1;  
		if(CurrentLength1 == 0){
			CurrentStory1++;
			CurrentStory1      = CurrentStory1 % massiveItemCount1;
			StorySummary1      = Summaries1[CurrentStory1].replace(/"/g,'-');      
			AnchorObject1.href = SiteLinks[CurrentStory1];
		}
		AnchorObject1.innerHTML = StorySummary1.substring(0,CurrentLength1) + znak1();
		if(CurrentLength1 != StorySummary1.length){
			CurrentLength1++;
			myTimeout1 = CharTimeout1;
		} else {
			CurrentLength1 = 0;
			myTimeout1 = StoryTimeout1;
		}
		setTimeout("runTheTicker1()", myTimeout1);
	}
	function znak1(){
		if(CurrentLength1 == StorySummary1.length) return "";
		else return "|";
	}

startTicker1();
//parallax
window.onload = function () {
	const parallax = document.querySelector('.banner__details');
	if(parallax){
		const details = document.querySelector('.banner__details > img');
		let thresholdSets = [];
		for (let i = 0; i < 1.0; i+= 0.005) {
			thresholdSets.push(i);
		}
		const callback = function(entries, observ) {
			const scrollTopProcent = window.pageYOffset/parallax.offsetHeight*100;
			setParallaxItemsStyle(scrollTopProcent);
		}
		const observ = new IntersectionObserver(callback,{
			threshold:thresholdSets
		});
		observ.observe(document.querySelector('.banner__details'))
		function setParallaxItemsStyle(scrollTopProcent) {
			details.parentElement.style.cssText = `transform: translate(4%,-${scrollTopProcent/4}%)`;
		}
	}
	
}



//modal block