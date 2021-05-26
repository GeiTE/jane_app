// Dwitter Shim by Frank Force 2020
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

function u(t) { // dwitter code goes here

onclick=_=>suffle=1
t?0:onclick()

if (suffle)
{
  c.width|=0
  suffle=0;
  x.fillStyle='#335'
  x.fillRect(0,0,2e3,2e3)
  x.font='1in"'
  x.fillStyle='#FFF'
  x.fillText('Click To Shuffle',30,100)
  A=[]
  for(i=62;i--;)
    if (i%16-11&&i%16<14)
      A.splice((A.length+1)*Math.random(),0,i)

  x.font='14em"'
  x.lineWidth=6;
  x.scale(1.5,1.5)
  x.translate(630,180)
 }

i++
if (i>51)
	return;
x.rotate(4*Math.PI/52),
x.translate(48-i*1,0),
x.fillStyle='#EEE',
X=-120,Y=30,
x.fillRect(X+7,Y-181,136,206),
x.fillStyle=A[i]%64<14||A[i]%64>45?'#000':'#F00',
x.fillText(String.fromCodePoint(55356,56481+A[i]),X,Y),
x.strokeRect(X+7,Y-180,133,203)
  
}

const fitToWindow = 1;
const limitFrameRate = 1;
let time = 0;
let frame = 0;
let FPS = 60;
let nextFrameMs = 0;
let x = c.getContext('2d');
let S = Math.sin;
let C = Math.cos;
let T = Math.tan;
let R = (r,g,b,a=1) => `rgba(${r|0},${g|0},${b|0},${a})`;

let loop = (frameTime) =>
{
  requestAnimationFrame(loop);
  
  // limit update rate to FPS
  if (limitFrameRate && frameTime < nextFrameMs-2)
    return;  // skip this cycle
  nextFrameMs = Math.max(nextFrameMs + 1000 / FPS, frameTime);
  
  // update time
  time = frame++ / FPS;
  if (time*FPS|0 == frame-2)
    time += 1e-6; // fixup floating point
  
  // update user function
  u(time);
  
  if (fitToWindow)
  {
    // fit dwitter sized canvas to window
    const aspect = 1920 / 1080;
    const width = aspect > innerWidth / innerHeight ? 
      innerWidth : innerHeight * aspect;
    c.style.width = width + 'px';
  }
  else
  {
    // fill window
    c.style.width = c.style.height = '';
    const aspect = c.width / c.height;
    if (aspect > innerWidth / innerHeight)
      c.style.height = '100%';
    else
      c.style.width = '100%';
  }
}

loop();