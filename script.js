	var audio = new Audio("Sound/SwitchSound.mp3");
	var audio1 = new Audio("Sound/SwitchSound1.mp3");
	var audio2 = new Audio("Sound/elelight.mp3");
	var audio3 = new Audio("Sound/lightout.mp3");

    function playAudio() {
        audio.play();
    }
	function playAudio1() {
        audio1.play();
    }
	function playAudio2() {
        audio2.play();
    }
	function playAudio3() {
        audio3.play();
    }
	

const alertButton = document.getElementById("salert");
alertButton.addEventListener("click", salert);

function salert() {
		  event.preventDefault();
    Swal.fire({
        position: 'center-center',
        icon: 'info',
        title: 'Anej Šuligoj, 4.Ra,<br>leto:2023/24,<br>mentor:Boštjan Vouk.',
        showConfirmButton: false,
        timer: 5500
    });
	
	Swal.getPopup().style.backgroundColor = 'rgb(242, 236, 79)';
    Swal.getTitle().style.color = 'rgb(51, 51, 2)';
    Swal.getTitle().style.fontFamily = 'display'; 
}



function drawPath() {
    var scaleFactor = 1.4;
    var path = [
        [202, 2], [202, 10], [186, 10], [186, 26], [170, 26], [170, 20], [170, 10], [158, 10], [138, 10],[138, 21], [138, 42], [154, 42], [154, 62], [154, 82], [154, 102], [154, 122], [134, 122], [122, 122], [122, 108], [122, 90], [138, 90], [138, 74], [124, 74], [114, 74], [90, 74], [90, 42],[108, 42], [122, 42],[122, 26], [122, 10], [106, 10], [106, 26], [90, 26], [90, 10],[75, 10], [55, 10], [42, 10], [42, 26], [25, 26], [10, 26], [10, 42], [26, 42], [26, 58], [42, 58], [42, 74], [36, 74], [26, 74],[26, 86], [26, 106], [50, 106], [70, 106], [90, 106], [90, 115], [90, 135], [90, 154], [74, 154], [74, 170], [85, 170], [106, 170], [106, 164], [106, 154], [120, 154], [140, 154],[154, 154], [154, 148], [154, 138], [166, 138], [186, 138], [186, 144], [186, 154], [192, 154], [202, 154], [202, 172], [202, 182], [202, 202], [185, 202], [170, 202], [170, 218], [186, 218], [186, 224], [186, 234], [196, 234], [202, 234], [202, 240], [202, 250], [214, 250], [234, 250], [234, 266], [246, 266], [266, 266], [266, 276], [266, 282], [236, 282], [218, 282], [218, 298], [240, 298], [250, 298], [250, 314], [266, 314], [266, 298], [272, 298], [282, 298], [282, 314], [298, 314], [298, 298], [314, 298], [314, 314], [322, 314], [342, 314], [352, 314], [362, 314], [362, 330], [255, 330], [251, 330],[250, 330], [250, 352],[250, 362], [266, 362], [266, 378], [234, 378], [234, 384], [234, 394], [202, 394], [202, 402]
		];
	const switchImage = document.getElementById("switch");
    switchImage.src = "slike/switch.png";
	playAudio();
	
    path = path.map(function(coordinate) {
        return coordinate.map(function(value) {
            return value * scaleFactor;
        });
    });

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const drawDelay = 100;

    path.reverse();

for (let i = 0; i < path.length - 1; i++) {
        setTimeout(() => {
            ctx.beginPath();
            ctx.moveTo(path[i][0], path[i][1]);
            ctx.lineTo(path[i + 1][0], path[i + 1][1]);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "yellow"; 
            ctx.stroke();
        if (i === path.length - 2) {
                changeImage();
				BrightImage();
            }
        }, i * drawDelay);
    }

function changeImage() {
    const zarnicaImage = document.getElementById("luc");
	
    zarnicaImage.style.height = "185px";
    zarnicaImage.style.width = "160px";
	zarnicaImage.style.marginLeft = "27.5%";
	zarnicaImage.style.marginTop = "-35px";
	zarnicaImage.src = "slike/zarnica1.png";
	playAudio2();
	document.body.classList.add("new-background");
}
function BrightImage() {
	const plakat = document.getElementById("plakat");
	const omarica = document.getElementById("omarica");	
	const ground = document.getElementById("ground");	
    plakat.classList.add("brighten");
    omarica.classList.add("brighten");
    ground.classList.add("brighten");
}
}




function erasePath() {
    const scaleFactor = 1.4;
    var path = [
        [202, 2], [202, 10], [186, 10], [186, 26], [170, 26], [170, 20], [170, 10], [158, 10], [138, 10],[138, 21], [138, 42], [154, 42], [154, 62], [154, 82], [154, 102], [154, 122], [134, 122], [122, 122], [122, 108], [122, 90], [138, 90], [138, 74], [124, 74], [114, 74], [90, 74], [90, 42],[108, 42], [122, 42],[122, 26], [122, 10], [106, 10], [106, 26], [90, 26], [90, 10],[75, 10], [55, 10], [42, 10], [42, 26], [25, 26], [10, 26], [10, 42], [26, 42], [26, 58], [42, 58], [42, 74], [36, 74], [26, 74],[26, 86], [26, 106], [50, 106], [70, 106], [90, 106], [90, 115], [90, 135], [90, 154], [74, 154], [74, 170], [85, 170], [106, 170], [106, 164], [106, 154], [120, 154], [140, 154],[154, 154], [154, 148], [154, 138], [166, 138], [186, 138], [186, 144], [186, 154], [192, 154], [202, 154], [202, 172], [202, 182], [202, 202], [185, 202], [170, 202], [170, 218], [186, 218], [186, 224], [186, 234], [196, 234], [202, 234], [202, 240], [202, 250], [214, 250], [234, 250], [234, 266], [246, 266], [266, 266], [266, 276], [266, 282], [236, 282], [218, 282], [218, 298], [240, 298], [250, 298], [250, 314], [266, 314], [266, 298], [272, 298], [282, 298], [282, 314], [298, 314], [298, 298], [314, 298], [314, 314], [322, 314], [342, 314], [352, 314], [362, 314], [362, 330], [255, 330], [251, 330],[250, 330], [250, 352],[250, 362], [266, 362], [266, 378], [244, 378], [234, 378], [234, 384], [234, 394], [202, 394], [202, 402]
		];
	const switchImage = document.getElementById("switch");
    switchImage.src = "slike/switch1.png";
	playAudio1();
	
    path = path.map(function(coordinate) {
        return coordinate.map(function(value) {
            return value * scaleFactor;
        });
    });

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const drawDelay = 100;
	


    path.reverse();
for (let i = 0; i < path.length - 1; i++) {
        setTimeout(() => {
            ctx.beginPath();
            ctx.moveTo(path[i][0], path[i][1]);
            ctx.lineTo(path[i + 1][0], path[i + 1][1]);
            ctx.lineWidth = 4;
            ctx.strokeStyle = "black"; 
            ctx.stroke();
        if (i === path.length - 2) {
                changeImage1();
			
            }
        }, i * drawDelay);
    }

function changeImage1() {
    const lucImage = document.getElementById("luc");

    lucImage.style.height = "150px";
    lucImage.style.width = "150px";
    lucImage.style.marginLeft = "28.5%";
    lucImage.style.marginTop = "0px";
    lucImage.src = "slike/luc.png";
    playAudio3();
    document.body.classList.remove("new-background");

	const plakatt = document.getElementById("plakat");
	const omaricaa = document.getElementById("omarica");  
	const groundd = document.getElementById("ground");  

	plakatt.style.filter = "brightness(0.5)";
	omaricaa.style.filter = "brightness(0.5)";
	groundd.style.filter = "brightness(0.5)";
}

}
const drawButton = document.getElementById("yellow");
drawButton.addEventListener("click", drawPath);
const resetButton = document.getElementById("black");
resetButton.addEventListener("click", erasePath);

/*const sparkImage = new Image();
    sparkImage.onload = function() {
        for (let i = 0; i < path.length - 1; i++) {
            setTimeout(() => {
                ctx.drawImage(sparkImage, path[i][0] - 10, path[i][1] - 10, 20, 20); 
				if (i === path.length - 2) {
                changeImage();
            }
            }, i * drawDelay);
        }
    };
    sparkImage.src = "slike/spark.png"; 
	*/
