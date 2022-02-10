let shotit = function() {
    html2canvas(document.getElementById('section'), {
        onrendered: function(canvas) {
            document.body.appendChild(canvas);
            leCanvas = document.getElementsByTagName("canvas")[0];
            let img = leCanvas.toDataURL("image/png");
            document.write('<br><br><span style="font:14px normal Helvetica, Arial; font-weight: bold; color:#13a6f5; margin-left:16px">Это Ваш скриншот. Нажав, можете сохранить как картинку. Чтобы вернуться, обновите страницу браузера:</span> <br><br> <img src="' + img + '"/>');
        },
        /*width: 390,
        height: 220*/
    });
}





let body = document.getElementById("body");
body.innerHTML = `
<style id = "style">
</style>
<header id="header">
    
</header>
<section id="section">


</section>
<footer id="footer">
</footer>
`;

let style = document.getElementById("style");
style.innerHTML = `
body{
  
  background: radial-gradient(#fbfbfb, #383838fc);
  
}
#body background{
    
    width: 50%;

}   

#text{

    text-align: center;
    font-size: 20px;
    padding:10px 0px 0px 0px;


}



h1, p, #postyk{

text-align: center;

}

h1 {
  
  background: linear-gradient(#29363b, #a9a892);
  color:#ffffff;
  
}

#post {
  
  color:#ceccab;
  
}

#sov {

color:#042e35;
text-align:center;
  
}

section {
  
 background:#ffffff; 
  
}


form {
    margin:0% 0% 0% 20%;
}
input {
  
  margin: 2% 0% 0% 0%;
  width:100px;
  height:100px;
}

button {
  margin: 2% 0% 0% 0%;
  padding: 10px 40px 20px;
  font-size: 18px;
  
}
`;


let header = document.getElementById("header");
header.innerHTML = `
<h1>Postyk</h1>

<p>Версия: 0.3</p>

<p id = "post">Веб - приложение для создания постов</p>

 <p>Postyk:<a href="https://andrey-berlin.github.io/"> Различные версии. Нажать  здесь</a></p>

<!--div id="NetWebAppJs">



<!--p>Подробности о проекте по ссылке:<a href="https://netwebappjs.github.io"> https://netwebappjs.github.io</a></p-->


<form action="">
        <br>
        <label for="">
            
            1. Чтобы поменять цвет фона, нажмите на "цвет", настройте его и нажмите "ok":

        </label>
        <br>
        <input type="color" id="body background" name="favcolor" value="#ffffff">
        <br>
        <br>
        <button type="button" onclick="createBodyBackground()">OK</button>
        <br>
        <br>

        <label for="">
            2. Введите текст на любом языке и нажмите 'OK':
        </label>
        <br>
        <textarea type='text' id="text" style="width:300px; height:200px;">
        </textarea> 
         <br>
         <button type="button" onclick="createText()">OK</button>
         <br>
         <br>

         <label for="">
         3. Поменять размер текста, движением ползунка от -> 18px -> 100px:
         </label>
         <br>
         <input type="range" min="18" name="a" max="100" value="18" step="10" id="font size" >
         <!--output name="x" for="a b"></output-->
         <br>
         <button type="button" onclick="createText()">OK</button>
         <br>
         <br>
         
         <label for="">
         4. Выравнить текст вправо-влево:
         </label>
         <br>
         <input type = "range" min='0' max='100' value="10" step='10' id="poziciyaText"  >
         <br>
         <button type="button" onclick="createText()">OK</button>
         <br>
         <br>

         <label for="">
         5. Чтобы изменить цвет текста нажмите на "цвет", настройте его и нажмите "ok"
         </label>
         <br>
        
         <input type="color" id="colorText" name="favcolor" value="#000">
         <br>
         <br>
         <button type="button" onclick="createText()">OK</button>
         <br>
         <br>
    </form>
<br>
<p id="sov">Ваш пост будет в рамке. Сделайте скриншот, сохраните картинку и поделитесь в соц сетях. </p>
<br>
`;

/*header.style.textAlign = 'center';*/
header.style.color = '#0a1267';
let text1 = document.getElementById("text1");




let section = document.getElementById("section");
section.innerHTML = `
       
        <p id="inText"></p>
        <p id ='p1'>©Postyk:)</p>

`;
section.style.border = 'thick double #32a1ce';
let p1 = document.getElementById('p1');
p1.style.textAlign = 'right';

let footer = document.getElementById('footer');
footer.innerHTML = `
<br>
<br>
<button onClick="shotit()">Сделать скриншот</button>
<br>

<div id = "postyk">

<svg

	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0%" y="0%"
	width="30%" height="30%"
	viewBox="0 0 24.0 24.0"
	enable-background="new 0 0 24.0 24.0"
	xml:space="preserve">
<defs>
	<linearGradient id="fillGrad0" x1="0.000%" y1="50.000%" x2="100.000%" y2="50.000%">
   		<stop offset="0.000%" style="stop-color:rgb(255,0,0);stop-opacity:1.000" />
		<stop offset="50.000%" style="stop-color:rgb(198,255,82);stop-opacity:1.000" />
		<stop offset="100.000%" style="stop-color:rgb(0,0,255);stop-opacity:1.000" />
	</linearGradient>

<filter id="glow0" x="-200%" y="-200%" width="600%" height="600%" >
	<feOffset result="offOut" in="SourceGraphic" dx="-1.0246451" dy="1.0246451" />
	<feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.38424194" />
	<feFlood flood-color="#000000" flood-opacity="1.000" result="flood"/>
	<feComposite in="flood" in2="blurOut" operator="in" result="blendOut0"/>
	<feBlend in="blendOut0" in2="blendOut0" result="blendOut1" mode="normal" />
	<feBlend in="SourceGraphic" in2="blendOut1" mode="normal" />
</filter>

</defs>

	<text 
		font-size="7.700966"
		font-family="default"
		stroke-width="0.24"
		stroke="#000000"
		stroke-opacity="1.000"
		fill-opacity="0"
		text-anchor="start"
		filter="url(#glow0)"
  		transform="rotate(-0.0 11.906826 10.97864) scale(0.738655 1.0)" >
		<tspan x="1.700105" y="13.866639">POSTYK</tspan>
	</text> 

	<text 
		font-size="7.700966"
		font-family="default"
		fill="url(#fillGrad0)"
		stroke-width="0"
		fill-opacity="1.0"
		text-anchor="start"
		filter="url(#glow0)"
  		transform="rotate(-0.0 11.906826 10.97864) scale(0.738655 1.0)" >

		<tspan x="1.700105" y="13.866639">POSTYK</tspan>
	</text>
</svg>
</div>
 <p>Postyk:<a href="https://andrey-berlin.github.io/"> Различные версии. Нажать  здесь</a></p>

<br>
<p>C уважением, Берлин Андрей.</p>

`;

footer.style.textAlign = 'center';



function createBodyBackground() {

    let bodyBackground = document.getElementById("body background").value;
    section.style.background = bodyBackground;

}

function createText() {

    let text = document.getElementById("text").value;

    let inText = document.getElementById("inText");
    inText.innerHTML = text;

    let textsize = document.getElementById("font size").value;
    inText.style.fontSize = textsize + "px";

    let poziciyaText = document.getElementById("poziciyaText").value;
    inText.style.paddingLeft = poziciyaText + 'px';

    let colorText = document.getElementById("colorText").value;
    inText.style.color = colorText;


}
