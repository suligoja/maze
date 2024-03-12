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
	
	function drawMaze(){
  var scaleFactor = 1.4;
	var cord=[
	[2, 2, 194, 2],
    [210, 2, 402, 2],
    [18, 18, 34, 18],
    [66, 18, 82, 18],
    [146, 18, 162, 18],
    [210, 18, 226, 18],
    [242, 18, 258, 18],
    [290, 18, 306, 18],
    [354, 18, 370, 18],
    [18, 34, 66, 34],
    [82, 34, 114, 34],
    [162, 34, 194, 34],
    [210, 34, 242, 34],
    [274, 34, 290, 34],
    [306, 34, 354, 34],
    [34, 50, 66, 50],
    [98, 50, 114, 50],
    [130, 50, 146, 50],
    [178, 50, 210, 50],
    [226, 50, 242, 50],
    [258, 50, 274, 50],
    [290, 50, 386, 50],
    [18, 66, 34, 66],
    [66, 66, 82, 66],
    [98, 66, 146, 66],
    [210, 66, 258, 66],
    [274, 66, 290, 66],
    [306, 66, 322, 66],
    [370, 66, 402, 66],
    [50, 82, 130, 82],
    [162, 82, 226, 82],
    [258, 82, 306, 82],
    [322, 82, 370, 82],
    [34, 98, 50, 98],
    [66, 98, 98, 98],
    [178, 98, 210, 98],
    [226, 98, 274, 98],
    [306, 98, 322, 98],
    [354, 98, 386, 98],
    [18, 114, 82, 114],
    [130, 114, 146, 114],
    [178, 114, 194, 114],
    [226, 114, 242, 114],
    [290, 114, 306, 114],
    [322, 114, 338, 114],
    [354, 114, 370, 114],
    [34, 130, 50, 130],
    [114, 130, 258, 130],
    [274, 130, 290, 130],
    [306, 130, 322, 130],
    [338, 130, 354, 130],
    [370, 130, 386, 130],
    [50, 146, 82, 146],
    [98, 146, 146, 146],
    [162, 146, 178, 146],
    [194, 146, 226, 146],
    [258, 146, 274, 146],
    [290, 146, 306, 146],
    [322, 146, 338, 146],
    [370, 146, 402, 146],
    [18, 162, 34, 162],
    [82, 162, 98, 162],
    [114, 162, 194, 162],
    [274, 162, 306, 162],
    [338, 162, 354, 162],
    [66, 178, 114, 178],
    [226, 178, 306, 178],
    [338, 178, 354, 178],
    [18, 194, 34, 194],
    [66, 194, 82, 194],
    [114, 194, 130, 194],
    [162, 194, 194, 194],
    [210, 194, 242, 194],
    [274, 194, 370, 194],
    [2, 210, 50, 210],
    [82, 210, 98, 210],
    [130, 210, 146, 210],
    [178, 210, 210, 210],
    [226, 210, 242, 210],
    [258, 210, 322, 210],
    [18, 226, 34, 226],
    [50, 226, 98, 226],
    [114, 226, 178, 226],
    [194, 226, 210, 226],
    [242, 226, 258, 226],
    [306, 226, 338, 226],
    [354, 226, 370, 226],
    [18, 242, 34, 242],
    [66, 242, 130, 242],
    [162, 242, 194, 242],
    [210, 242, 242, 242],
    [290, 242, 306, 242],
    [338, 242, 386, 242],
    [34, 258, 50, 258],
    [114, 258, 146, 258],
    [178, 258, 210, 258],
    [242, 258, 274, 258],
    [322, 258, 338, 258],
    [354, 258, 370, 258],
    [386, 258, 402, 258],
    [34, 274, 50, 274],
    [98, 274, 130, 274],
    [178, 274, 258, 274],
    [322, 274, 386, 274],
    [18, 290, 34, 290],
    [50, 290, 114, 290],
    [146, 290, 194, 290],
    [226, 290, 322, 290],
    [370, 290, 402, 290],
    [2, 306, 18, 306],
    [66, 306, 98, 306],
    [146, 306, 162, 306],
    [194, 306, 226, 306],
    [322, 306, 370, 306],
    [386, 306, 402, 306],
    [66, 322, 82, 322],
    [114, 322, 130, 322],
    [146, 322, 194, 322],
    [242, 322, 354, 322],
    [98, 338, 146, 338],
    [162, 338, 194, 338],
    [210, 338, 242, 338],
    [258, 338, 290, 338],
    [322, 338, 386, 338],
    [18, 354, 34, 354],
    [50, 354, 66, 354],
    [114, 354, 162, 354],
    [194, 354, 210, 354],
    [258, 354, 306, 354],
    [354, 354, 370, 354],
    [386, 354, 402, 354],
    [2, 370, 18, 370],
    [34, 370, 50, 370],
    [98, 370, 114, 370],
    [130, 370, 178, 370],
    [210, 370, 258, 370],
    [274, 370, 290, 370],
    [306, 370, 370, 370],
    [18, 386, 34, 386],
    [66, 386, 98, 386],
    [114, 386, 178, 386],
    [194, 386, 226, 386],
    [242, 386, 274, 386],
    [290, 386, 338, 386],
    [370, 386, 386, 386],
    [2, 402, 194, 402],
    [210, 402, 402, 402],
    [2, 2, 2, 402],
    [18, 50, 18, 146],
    [18, 162, 18, 194],
    [18, 242, 18, 290],
    [18, 306, 18, 322],
    [18, 338, 18, 354],
    [34, 2, 34, 18],
    [34, 34, 34, 50],
    [34, 82, 34, 98],
    [34, 130, 34, 162],
    [34, 178, 34, 194],
    [34, 210, 34, 226],
    [34, 258, 34, 274],
    [34, 290, 34, 386],
    [50, 18, 50, 34],
    [50, 50, 50, 98],
    [50, 130, 50, 146],
    [50, 162, 50, 210],
    [50, 226, 50, 258],
    [50, 274, 50, 354],
    [50, 370, 50, 402],
    [66, 114, 66, 130],
    [66, 146, 66, 194],
    [66, 210, 66, 226],
    [66, 242, 66, 274],
    [66, 306, 66, 322],
    [66, 338, 66, 386],
    [82, 18, 82, 82],
    [82, 114, 82, 146],
    [82, 258, 82, 290],
    [82, 322, 82, 338],
    [82, 354, 82, 386],
    [98, 2, 98, 18],
    [98, 50, 98, 66],
    [98, 98, 98, 162],
    [98, 178, 98, 210],
    [98, 242, 98, 274],
    [98, 306, 98, 370],
    [114, 18, 114, 34],
    [114, 82, 114, 130],
    [114, 162, 114, 178],
    [114, 210, 114, 242],
    [114, 290, 114, 322],
    [114, 386, 114, 402],
    [130, 2, 130, 50],
    [130, 98, 130, 114],
    [130, 162, 130, 210],
    [130, 274, 130, 322],
    [130, 370, 130, 386],
    [146, 18, 146, 34],
    [146, 50, 146, 114],
    [146, 130, 146, 146],
    [146, 178, 146, 210],
    [146, 226, 146, 242],
    [146, 258, 146, 290],
    [146, 306, 146, 338],
    [162, 18, 162, 130],
    [162, 178, 162, 226],
    [162, 242, 162, 290],
    [162, 338, 162, 354],
    [178, 2, 178, 18],
    [178, 50, 178, 66],
    [178, 98, 178, 114],
    [178, 146, 178, 178],
    [178, 226, 178, 242],
    [178, 258, 178, 274],
    [178, 290, 178, 322],
    [178, 354, 178, 370],
    [194, 18, 194, 34],
    [194, 66, 194, 82],
    [194, 130, 194, 146],
    [194, 162, 194, 194],
    [194, 210, 194, 226],
    [194, 322, 194, 402],
    [210, 34, 210, 66],
    [210, 98, 210, 130],
    [210, 146, 210, 210],
    [210, 226, 210, 242],
    [210, 274, 210, 338],
    [226, 18, 226, 34],
    [226, 82, 226, 98],
    [226, 146, 226, 162],
    [226, 226, 226, 242],
    [226, 258, 226, 274],
    [226, 306, 226, 322],
    [226, 354, 226, 386],
    [242, 2, 242, 18],
    [242, 34, 242, 50],
    [242, 66, 242, 82],
    [242, 98, 242, 114],
    [242, 130, 242, 162],
    [242, 194, 242, 226],
    [242, 242, 242, 258],
    [242, 306, 242, 370],
    [242, 386, 242, 402],
    [258, 18, 258, 66],
    [258, 114, 258, 130],
    [258, 146, 258, 242],
    [258, 290, 258, 306],
    [258, 338, 258, 354],
    [274, 18, 274, 34],
    [274, 66, 274, 82],
    [274, 98, 274, 130],
    [274, 226, 274, 290],
    [274, 306, 274, 322],
    [274, 354, 274, 386],
    [290, 2, 290, 18],
    [290, 34, 290, 66],
    [290, 82, 290, 114],
    [290, 130, 290, 146],
    [290, 210, 290, 274],
    [290, 290, 290, 306],
    [306, 18, 306, 34],
    [306, 66, 306, 82],
    [306, 114, 306, 130],
    [306, 146, 306, 162],
    [306, 258, 306, 290],
    [306, 306, 306, 322],
    [306, 338, 306, 354],
    [306, 370, 306, 386],
    [322, 2, 322, 18],
    [322, 66, 322, 82],
    [322, 98, 322, 114],
    [322, 130, 322, 194],
    [322, 226, 322, 258],
    [322, 274, 322, 306],
    [322, 338, 322, 370],
    [338, 2, 338, 18],
    [338, 50, 338, 66],
    [338, 82, 338, 130],
    [338, 146, 338, 178],
    [338, 194, 338, 226],
    [338, 242, 338, 258],
    [338, 290, 338, 306],
    [338, 338, 338, 354],
    [354, 66, 354, 82],
    [354, 130, 354, 146],
    [354, 210, 354, 226],
    [354, 274, 354, 290],
    [354, 370, 354, 402],
    [370, 2, 370, 34],
    [370, 82, 370, 98],
    [370, 114, 370, 226],
    [370, 242, 370, 258],
    [370, 306, 370, 354],
    [386, 18, 386, 50],
    [386, 66, 386, 82],
    [386, 98, 386, 114],
    [386, 162, 386, 242],
    [386, 322, 386, 338],
    [386, 354, 386, 386],
    [402, 2, 402, 402],
	];
	
	cord = cord.map(function(coordinate) {
        return coordinate.map(function(value) {
            return value * scaleFactor;
        });
    });
	
	const canvas = document.getElementById("canvas");
    canvas.width *= scaleFactor;
    canvas.height *= scaleFactor;
	
	
   const ctx = canvas.getContext("2d");
   console.log("maze "+cord.length);
   ctx.beginPath();
   for(i=0;i<cord.length;i++){
     console.log("maze2");
     ctx.moveTo(cord[i][0],cord[i][1]);
     ctx.lineTo(cord[i][2],cord[i][3]);
    }
    ctx.lineWidth = 2;
    ctx.stroke();
    console.log("maze3 "+cord.length);
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
	//sweet alert barve
	Swal.getPopup().style.backgroundColor = 'rgb(255, 255, 153)';
    Swal.getTitle().style.color = 'rgb(51, 51, 2)';
    /*Swal.getPopup().style.fontFamily = 'display';*/
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
            ctx.strokeStyle = "red";
            ctx.stroke();
        if (i === path.length - 2) {
                changeImage();
            }
        }, i * drawDelay);
    }


function changeImage() {
    const zarnicaImage = document.getElementById("luc");
     
    zarnicaImage.style.height = "150px";
    zarnicaImage.style.width = "135px";
	zarnicaImage.style.marginLeft = "38%";
	zarnicaImage.src = "slike/zarnica.png";
	playAudio2();
}


}




function erasePath() {
    const scaleFactor = 1.4;
    var path = [
        [202, 2], [202, 10], [186, 10], [186, 26], [170, 26], [170, 20], [170, 10], [158, 10], [138, 10],[138, 21], [138, 42], [154, 42], [154, 62], [154, 82], [154, 102], [154, 122], [134, 122], [122, 122], [122, 108], [122, 90], [138, 90], [138, 74], [124, 74], [114, 74], [90, 74], [90, 42],[108, 42], [122, 42],[122, 26], [122, 10], [106, 10], [106, 26], [90, 26], [90, 10],[75, 10], [55, 10], [42, 10], [42, 26], [25, 26], [10, 26], [10, 42], [26, 42], [26, 58], [42, 58], [42, 74], [36, 74], [26, 74],[26, 86], [26, 106], [50, 106], [70, 106], [90, 106], [90, 115], [90, 135], [90, 154], [74, 154], [74, 170], [85, 170], [106, 170], [106, 164], [106, 154], [120, 154], [140, 154],[154, 154], [154, 148], [154, 138], [166, 138], [186, 138], [186, 144], [186, 154], [192, 154], [202, 154], [202, 172], [202, 182], [202, 202], [185, 202], [170, 202], [170, 218], [186, 218], [186, 224], [186, 234], [196, 234], [202, 234], [202, 240], [202, 250], [214, 250], [234, 250], [234, 266], [246, 266], [266, 266], [266, 276], [266, 282], [236, 282], [218, 282], [218, 298], [240, 298], [250, 298], [250, 314], [266, 314], [266, 298], [272, 298], [282, 298], [282, 314], [298, 314], [298, 298], [314, 298], [314, 314], [322, 314], [342, 314], [352, 314], [362, 314], [362, 330], [255, 330], [251, 330],[250, 330], [250, 352],[250, 362], [266, 362], [266, 378], [234, 378], [234, 384], [234, 394], [202, 394], [202, 402]
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
            ctx.strokeStyle = "rgba(229, 229, 1)"; 
            ctx.stroke();
        if (i === path.length - 2) {
                changeImage();
            }
        }, i * drawDelay);
    }


function changeImage() {
    const lucImage = document.getElementById("luc");

	lucImage.style.height = "150px";
    lucImage.style.width = "150px";
	lucImage.style.marginLeft = "37%";
    lucImage.src = "slike/luc.png";
	playAudio3();
}
}

const resetButton = document.getElementById("yellow");
resetButton.addEventListener("click", erasePath);

