var video = document.querySelector("#player1")

/*function getVideo(){
	vid = document.querySelector("video");
} */

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	//console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100+"%"

}); 


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100+"%"
	//console.log("The current volume is " + video.volume)

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()

});

document.querySelector("#slower").addEventListener("click", function() {
	//console.log("Current speed is " + video.playbackRate)
	video.playbackRate *= .95;
	console.log("New speed is " + video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", function() {
	//console.log("Current speed is " + video.playbackRate)
	video.playbackRate /= .95;
	console.log("New speed is " + video.playbackRate)

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime)
	video.currentTime += 15
	if (video.ended){
		console.log("Going back to beginning")
		video.load()
		video.play()
		playbackRate = 1;
	}
	console.log("New Location " + video.currentTime)

});

document.querySelector("#mute").addEventListener("click", function() {
	//console.log("The value of mute is  " + video.muted)
	if (video.muted) {
		video.muted = false;
		this.innerText = ("Mute")
	}
	else{
		video.muted = true;
		this.innerText = ("Unmute")
	}


});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume + "%"
	
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")

});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")

});


