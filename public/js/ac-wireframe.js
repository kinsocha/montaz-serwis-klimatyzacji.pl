(function(){
const wrap=document.getElementById('ac-wireframe');
if(!wrap)return;
const W=window.innerWidth,H=window.innerHeight;
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
renderer.setSize(W,H);renderer.setClearColor(0x000000,0);
wrap.appendChild(renderer.domElement);
const scene=new THREE.Scene();
const aspect=W/H,camSize=320;
const camera=new THREE.OrthographicCamera(-camSize*aspect,camSize*aspect,camSize,-camSize,0.1,3000);
camera.position.set(0,0,1500);camera.lookAt(0,0,0);

const sg=new THREE.BufferGeometry();const sp=[];
for(let i=0;i<180;i++)sp.push((Math.random()-.5)*1800,(Math.random()-.5)*1100,(Math.random()-.5)*400-200);
sg.setAttribute('position',new THREE.Float32BufferAttribute(sp,3));
scene.add(new THREE.Points(sg,new THREE.PointsMaterial({color:0x336688,size:1.4})));
const group=new THREE.Group();scene.add(group);

function makeGlowTex(){
  const s=128,cv=document.createElement('canvas');cv.width=cv.height=s;
  const ctx=cv.getContext('2d'),c=s/2;
  const g=ctx.createRadialGradient(c,c,0,c,c,c);
  g.addColorStop(0,'rgba(220,255,255,1)');g.addColorStop(0.18,'rgba(0,210,240,0.88)');
  g.addColorStop(0.45,'rgba(0,140,180,0.28)');g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,s,s);return new THREE.CanvasTexture(cv);
}
const GT=makeGlowTex();
function lm(op,col=0x00ccee){return new THREE.LineBasicMaterial({color:col,transparent:op<1,opacity:op,blending:THREE.AdditiveBlending,depthWrite:false});}
const wmat=new THREE.MeshBasicMaterial({color:0x001833,transparent:true,opacity:0.38,depthWrite:false});
const bluemat=new THREE.MeshBasicMaterial({color:0x0055bb,transparent:true,opacity:0.65,depthWrite:false});
const darkmat=new THREE.MeshBasicMaterial({color:0x001020,transparent:true,opacity:0.7,depthWrite:false});

function addEdges(geo,x,y,z,thresh=15,grp=group){
  const eg=new THREE.EdgesGeometry(geo,thresh);
  [[1,1],[0.22,1.009],[0.07,1.02]].forEach(([op,sc])=>{const l=new THREE.LineSegments(eg,lm(op));l.position.set(x,y,z);l.scale.setScalar(sc);grp.add(l);});
}
function fillM(geo,x,y,z,mat=wmat,grp=group){const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);grp.add(m);}
function node(x,y,z,sz=16,col=0x00ccee,grp=group){
  const s=new THREE.Sprite(new THREE.SpriteMaterial({map:GT,color:col,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true}));
  s.position.set(x,y,z);s.scale.setScalar(sz);grp.add(s);
}
function addBox(w,h,d,x,y,z,t=15,mat=wmat,grp=group){
  const geo=new THREE.BoxGeometry(w,h,d,Math.ceil(w/30),Math.ceil(h/25),Math.ceil(d/20));
  fillM(geo,x,y,z,mat,grp);addEdges(geo,x,y,z,t,grp);
}
function addCyl(r,h,x,y,z,rx=0,rz=0,segs=8,grp=group){
  const geo=new THREE.CylinderGeometry(r,r,h,segs);
  if(rx)geo.rotateX(rx);if(rz)geo.rotateZ(rz);
  fillM(geo,x,y,z,wmat,grp);addEdges(geo,x,y,z,30,grp);
}
function addTriMesh(cx,cy,cz,w,h,cols,rows,axis='z',op=0.13,grp=group){
  const verts=[],dw=w/cols,dh=h/rows;
  function p(u,v){
    if(axis==='z')return[cx+u,cy+v,cz];if(axis==='y')return[cx+u,cy,cz+v];
    if(axis==='x')return[cx,cy+v,cz+u];if(axis==='-x')return[cx,cy+v,cz-u];
  }
  for(let r=0;r<=rows;r++)for(let c=0;c<=cols;c++){
    const u=-w/2+c*dw,v=-h/2+r*dh;
    if(c<cols)verts.push(...p(u,v),...p(u+dw,v));
    if(r<rows)verts.push(...p(u,v),...p(u,v+dh));
    if(c<cols&&r<rows)verts.push(...p(u+dw,v),...p(u,v+dh));
  }
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));
  [[op,1],[op*.3,1.003]].forEach(([o,sc])=>{const l=new THREE.LineSegments(geo,lm(o));l.scale.setScalar(sc);grp.add(l);});
}

// --- JEDNOSTKA WEWNETRZNA ---
const indG=new THREE.Group();indG.position.set(-155,105,0);group.add(indG);
const BW=290,BH=72,BD=48;
addBox(BW,BH,BD,0,0,0,15,wmat,indG);
[[-BW/2,-BD/2],[BW/2,-BD/2],[BW/2,BD/2],[-BW/2,BD/2]].forEach(([cx,cz])=>addCyl(5,BH,cx,0,cz,0,0,8,indG));
addCyl(5,BW,0,BH/2,-BD/2,0,Math.PI/2,8,indG);addCyl(5,BW,0,BH/2,BD/2,0,Math.PI/2,8,indG);
addCyl(5,BD,-BW/2,BH/2,0,Math.PI/2,0,8,indG);addCyl(5,BD,BW/2,BH/2,0,Math.PI/2,0,8,indG);
const KW=278,KH=16,KD=54;
addBox(KW,KH,KD,0,-(BH/2+KH/2)-.5,3,15,wmat,indG);
addBox(284,7,42,0,BH/2+7/2+.5,-2,15,wmat,indG);
for(let i=0;i<6;i++){const lx=-KW/2+20+i*(KW-40)/5;addCyl(1.2,KD-4,lx,-(BH/2+KH/2+.5),3,Math.PI/2,0,6,indG);}
fillM(new THREE.BoxGeometry(28,6,1),100,24,-BD/2-.5,bluemat,indG);
addEdges(new THREE.BoxGeometry(28,6,1),100,24,-BD/2-.5,15,indG);
node(100,24,-BD/2-1,14,0x44aaff,indG);
const off=1.2;
addTriMesh(0,0,BD/2+off,BW,BH,16,5,'z',0.13,indG);addTriMesh(0,0,-BD/2-off,BW,BH,16,5,'z',0.13,indG);
addTriMesh(0,BH/2+off,0,BW,BD,14,3,'y',0.13,indG);addTriMesh(-BW/2-off,0,0,BD,BH,3,4,'x',0.10,indG);
addTriMesh(BW/2+off,0,0,BD,BH,3,4,'-x',0.10,indG);addTriMesh(0,-(BH/2+KH/2+.5),3+KD/2+off,KW,KH,12,2,'z',0.11,indG);
const hw=BW/2,hh=BH/2,hd=BD/2;
[[-hw,-hh,-hd],[hw,-hh,-hd],[hw,hh,-hd],[-hw,hh,-hd],[-hw,-hh,hd],[hw,-hh,hd],[hw,hh,hd],[-hw,hh,hd]].forEach(p=>node(p[0],p[1],p[2],20,0x00ccee,indG));
[[0,hh,-hd],[0,-hh,-hd],[0,hh,hd],[0,-hh,hd],[hw,0,-hd],[-hw,0,-hd],[hw,0,hd],[-hw,0,hd]].forEach(p=>node(p[0],p[1],p[2],10,0x00ccee,indG));

// --- JEDNOSTKA ZEWNETRZNA ---
const outG=new THREE.Group();outG.position.set(130,-65,0);group.add(outG);
const OW=200,OH=220,OD=160;
addBox(OW,OH,OD,0,0,0,15,wmat,outG);
[[-OW/2,-OD/2],[OW/2,-OD/2],[OW/2,OD/2],[-OW/2,OD/2]].forEach(([cx,cz])=>addCyl(5,OH,cx,0,cz,0,0,8,outG));
addCyl(4,OW,0,OH/2,-OD/2,0,Math.PI/2,8,outG);addCyl(4,OW,0,OH/2,OD/2,0,Math.PI/2,8,outG);
addCyl(4,OD,-OW/2,OH/2,0,Math.PI/2,0,8,outG);addCyl(4,OD,OW/2,OH/2,0,Math.PI/2,0,8,outG);
const fanR=72,fanX=0,fanY=OH*0.08,fanZ=-OD/2-1;
const fanGroup=new THREE.Group();fanGroup.position.set(fanX,fanY,fanZ);outG.add(fanGroup);
function addToFan(obj){fanGroup.add(obj);}
const fanRings=[fanR,fanR*0.72,fanR*0.44,fanR*0.18];
fanRings.forEach(r=>{
  const pts=[];for(let i=0;i<=48;i++){const a=i/48*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r,0));}
  const geo=new THREE.BufferGeometry().setFromPoints(pts);
  [[1,1],[0.22,1.009],[0.07,1.02]].forEach(([op])=>{const l=new THREE.Line(geo,lm(op));l.position.set(fanX,fanY,fanZ);outG.add(l);});
});
for(let i=0;i<6;i++){
  const a=i/6*Math.PI*2;
  const pts=[new THREE.Vector3(Math.cos(a)*fanR*0.18,Math.sin(a)*fanR*0.18,0),new THREE.Vector3(Math.cos(a+0.4)*fanR*0.95,Math.sin(a+0.4)*fanR*0.95,0)];
  const geo=new THREE.BufferGeometry().setFromPoints(pts);
  [[1,1],[0.18,1.004]].forEach(([op])=>{const l=new THREE.Line(geo,lm(op));l.position.set(fanX,fanY,fanZ);outG.add(l);});
}
const bladeCount=5,bladeZoff=22,bInR=fanR*0.18,bOutR=fanR*0.87,bSweep=0.32,bChordIn=fanR*0.09,bChordOut=fanR*0.40,bSteps=10,bPitch=0.45;
const bladeMat=new THREE.MeshBasicMaterial({color:0x00ccee,transparent:false,side:THREE.DoubleSide,depthWrite:true});
for(let b=0;b<bladeCount;b++){
  const baseA=b/bladeCount*Math.PI*2;const pts2d=[];
  for(let i=0;i<=bSteps;i++){const t=i/bSteps,r=bInR+(bOutR-bInR)*t,sw=bSweep*t,cf=t<0.8?t/0.8:1.0,ch=bChordIn+(bChordOut-bChordIn)*cf;pts2d.push([r*Math.cos(sw),r*Math.sin(sw)+ch*0.5]);}
  const tipSw=bSweep,tipCx=bOutR*Math.cos(tipSw),tipCy=bOutR*Math.sin(tipSw),tipR=bChordOut*0.50;
  for(let i=1;i<=8;i++){const a=Math.PI/2-i/8*Math.PI,ang=a+tipSw+Math.PI/2;pts2d.push([tipCx+tipR*Math.cos(ang),tipCy+tipR*Math.sin(ang)]);}
  for(let i=bSteps;i>=0;i--){const t=i/bSteps,r=bInR+(bOutR-bInR)*t,sw=bSweep*t,cf=t<0.8?t/0.8:1.0,ch=bChordIn+(bChordOut-bChordIn)*cf;pts2d.push([r*Math.cos(sw),r*Math.sin(sw)-ch*0.5]);}
  function tr(pt){const lx=pt[0],ly=pt[1],y2=ly*Math.cos(bPitch),z2=ly*Math.sin(bPitch),x3=lx*Math.cos(baseA)-y2*Math.sin(baseA),y3=lx*Math.sin(baseA)+y2*Math.cos(baseA);return new THREE.Vector3(x3,y3,z2+bladeZoff);}
  const shape2d=new THREE.Shape(pts2d.map(function(p){return new THREE.Vector2(p[0],p[1])}));
  const fillGeo=new THREE.ShapeGeometry(shape2d);const pos=fillGeo.attributes.position;
  for(let vi=0;vi<pos.count;vi++){const p=tr([pos.getX(vi),pos.getY(vi)]);pos.setXYZ(vi,p.x,p.y,p.z);}
  pos.needsUpdate=true;addToFan(new THREE.Mesh(fillGeo,bladeMat));
  const pts3d=pts2d.map(tr);addToFan(new THREE.Line(new THREE.BufferGeometry().setFromPoints([...pts3d,pts3d[0]]),lm(1)));
}
const piastaGeo=new THREE.CylinderGeometry(fanR*0.13,fanR*0.13,14,16);piastaGeo.rotateX(Math.PI/2);
addToFan(new THREE.Mesh(piastaGeo,wmat));
const piastaEg=new THREE.EdgesGeometry(piastaGeo,30);
[[1,1],[0.22,1.009]].forEach(([op,sc])=>{const l=new THREE.LineSegments(piastaEg,lm(op));l.scale.setScalar(sc);addToFan(l);});
fillM(new THREE.CircleGeometry(fanR,48),fanX,fanY,fanZ+0.5,darkmat,outG);
const grateFrame=new THREE.BoxGeometry(OW*0.88,OH*0.72,2);fillM(grateFrame,fanX,fanY,fanZ-1,darkmat,outG);addEdges(grateFrame,fanX,fanY,fanZ-1,5,outG);
const louverCount=14,louverW=OD-10;
for(let i=0;i<louverCount;i++){
  const ly=-OH/2+20+i*(OH-40)/louverCount;
  const gL=new THREE.BoxGeometry(louverW,2.5,1);gL.rotateX(0.3);fillM(gL,-OW/2+louverW/2,ly,0,wmat,outG);addEdges(gL,-OW/2+louverW/2,ly,0,30,outG);
  const gR=new THREE.BoxGeometry(louverW,2.5,1);gR.rotateX(0.3);fillM(gR,OW/2-louverW/2,ly,0,wmat,outG);addEdges(gR,OW/2-louverW/2,ly,0,30,outG);
}
addBox(60,8,OD*0.5,60,OH/2+4,0,10,bluemat,outG);
addBox(70,80,20,-50,-OH/2+45,OD/2+10,15,wmat,outG);addCyl(6,50,-50,-OH/2+90,OD/2+10,0,0,12,outG);
addCyl(8,40,70,-OH/2-20,OD/4,Math.PI/2,0,12,outG);addCyl(5,40,70,-OH/2-20,OD/4-22,Math.PI/2,0,10,outG);
[[-OW/2+18,-OD/2+14],[OW/2-18,-OD/2+14],[OW/2-18,OD/2-14],[-OW/2+18,OD/2-14]].forEach(([nx,nz])=>addCyl(8,14,nx,-OH/2-7,nz,0,0,6,outG));
addBox(OW+10,6,OD+10,0,-OH/2-13,0,15,wmat,outG);
const ohw=OW/2,ohh=OH/2,ohd=OD/2;
[[-ohw,-ohh,-ohd],[ohw,-ohh,-ohd],[ohw,ohh,-ohd],[-ohw,ohh,-ohd],[-ohw,-ohh,ohd],[ohw,-ohh,ohd],[ohw,ohh,ohd],[-ohw,ohh,ohd]].forEach(p=>node(p[0],p[1],p[2],20,0x00ccee,outG));
addTriMesh(0,0,-OD/2-1,OW,OH,14,7,'z',0.08,outG);addTriMesh(0,0,OD/2+1,OW,OH,14,7,'z',0.08,outG);addTriMesh(0,OH/2+1,0,OW,OD,12,4,'y',0.08,outG);

// --- DYNAMICZNY PRZEWOD ---
const PIPE_PTS=60;
function makeDynPipe(opacity){
  const arr=new Float32Array((PIPE_PTS+1)*3);
  const buf=new THREE.BufferAttribute(arr,3);buf.setUsage(THREE.DynamicDrawUsage);
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',buf);
  const line=new THREE.Line(geo,lm(opacity));group.add(line);
  return{arr,buf,geo};
}
const pipe1=makeDynPipe(1);
const pipe2=makeDynPipe(0.55);
const pipe1b=makeDynPipe(0.18);
const pipe2b=makeDynPipe(0.12);
const indConnLocal=new THREE.Vector3(BW/2,-10,BD/2);
const outConnLocal=new THREE.Vector3(-OW/2,-OH/4,-OD/2);
function updatePipe(pipeObj,offset){
  indG.updateMatrix();outG.updateMatrix();
  const A=indConnLocal.clone().applyMatrix4(indG.matrix).add(new THREE.Vector3(offset,0,0));
  const B=outConnLocal.clone().applyMatrix4(outG.matrix).add(new THREE.Vector3(-offset,0,0));
  const mid1=A.clone().lerp(B,0.3).add(new THREE.Vector3(0,20+offset*3,15));
  const mid2=A.clone().lerp(B,0.7).add(new THREE.Vector3(0,-10+offset*2,15));
  const curve=new THREE.CatmullRomCurve3([A,mid1,mid2,B]);
  const pts=curve.getPoints(PIPE_PTS);
  pts.forEach(function(p,i){pipeObj.arr[i*3]=p.x;pipeObj.arr[i*3+1]=p.y;pipeObj.arr[i*3+2]=p.z;});
  pipeObj.buf.needsUpdate=true;pipeObj.geo.computeBoundingSphere();
}

// --- PULSARY ---
const irS=[];
function pulse(x,y,z,col,sz,grp){
  const s=new THREE.Sprite(new THREE.SpriteMaterial({map:GT,color:col,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true}));
  s.position.set(x,y,z);s.scale.setScalar(sz);grp.add(s);irS.push(s);
}
pulse(-105,24,-BD/2-1,0xff2200,12,indG);
for(let x=-80;x<=80;x+=26)pulse(x,-(BH/2+KH+1),-hd-1,0x00ffbb,9,indG);
pulse(-80,OH/2-15,-OD/2-1,0x00ff88,10,outG);
pulse(-60,OH/2-15,-OD/2-1,0xff4400,9,outG);
pulse(fanX,fanY,fanZ+20,0x00aacc,75,outG);

// --- STEROWANIE ---
const SENS=0.008,SENS_X=0.008,MAX_VY=0.030,MAX_VX=0.030;
const BASE_VY_IND=0.006,BASE_VY_OUT=-0.005;
const state={
  ind:{rotX:0.1,rotY:0.15,velY:BASE_VY_IND,velX:0},
  out:{rotX:0.18,rotY:-0.2,velY:BASE_VY_OUT,velX:0}
};
let activeUnit=null,px=0,py=0,smDX=0,smDY=0;
function clamp(v,max){return Math.max(-max,Math.min(max,v));}

// Interakcja na canvasie
const cvs=renderer.domElement;
cvs.addEventListener('mousedown',function(e){
  const rect=cvs.getBoundingClientRect();
  const relX=(e.clientX-rect.left)/rect.width;
  activeUnit=relX<0.5?state.ind:state.out;
  px=e.clientX;py=e.clientY;smDX=0;smDY=0;
});
window.addEventListener('mousemove',function(e){
  if(!activeUnit)return;
  const dx=e.clientX-px,dy=e.clientY-py;
  smDX=smDX*.6+dx*.4;smDY=smDY*.6+dy*.4;
  activeUnit.rotY+=dx*SENS;activeUnit.rotX+=dy*SENS_X;
  px=e.clientX;py=e.clientY;
});
window.addEventListener('mouseup',function(){
  if(!activeUnit)return;
  activeUnit.velY=clamp(smDX*SENS,MAX_VY);
  activeUnit.velX=clamp(smDY*SENS_X,MAX_VX);
  activeUnit=null;
});
cvs.addEventListener('touchstart',function(e){e.preventDefault();const t=e.touches[0];const rect=cvs.getBoundingClientRect();const relX=(t.clientX-rect.left)/rect.width;activeUnit=relX<0.5?state.ind:state.out;px=t.clientX;py=t.clientY;smDX=0;smDY=0;},{passive:false});
cvs.addEventListener('touchmove',function(e){e.preventDefault();if(!activeUnit)return;const t=e.touches[0];const dx=t.clientX-px,dy=t.clientY-py;smDX=smDX*.6+dx*.4;smDY=smDY*.6+dy*.4;activeUnit.rotY+=dx*SENS;activeUnit.rotX+=dy*SENS_X;px=t.clientX;py=t.clientY;},{passive:false});
cvs.addEventListener('touchend',function(){if(!activeUnit)return;activeUnit.velY=clamp(smDX*SENS,MAX_VY);activeUnit.velX=clamp(smDY*SENS_X,MAX_VX);activeUnit=null;});

// Resize
window.addEventListener('resize',function(){
  const w=window.innerWidth,h=window.innerHeight;
  const a=w/h;
  camera.left=-camSize*a;camera.right=camSize*a;camera.top=camSize;camera.bottom=-camSize;
  camera.updateProjectionMatrix();
  renderer.setSize(w,h);
});

let t2=0;
(function animate(){
  requestAnimationFrame(animate);t2+=.04;
  if(activeUnit!==state.ind){
    state.ind.velY+=(BASE_VY_IND-state.ind.velY)*0.01;
    state.ind.velX*=0.96;
    state.ind.rotY+=state.ind.velY;state.ind.rotX+=state.ind.velX;
  }
  if(activeUnit!==state.out){
    state.out.velY+=(BASE_VY_OUT-state.out.velY)*0.01;
    state.out.velX*=0.96;
    state.out.rotY+=state.out.velY;state.out.rotX+=state.out.velX;
  }
  indG.rotation.x=state.ind.rotX;indG.rotation.y=state.ind.rotY;
  outG.rotation.x=state.out.rotX;outG.rotation.y=state.out.rotY;
  fanGroup.rotation.z+=0.025;
  updatePipe(pipe1,0);updatePipe(pipe1b,0);
  updatePipe(pipe2,5);updatePipe(pipe2b,5);
  if(irS[0])irS[0].material.opacity=.5+.5*Math.sin(t2*1.8);
  for(let i=1;i<=6;i++)if(irS[i])irS[i].material.opacity=.4+.4*Math.sin(t2+(i-1)*.8);
  if(irS[7])irS[7].material.opacity=.5+.5*Math.sin(t2*1.4);
  if(irS[8])irS[8].material.opacity=.3+.3*Math.sin(t2*2.1+1);
  if(irS[9])irS[9].material.opacity=Math.max(0.05,0.98*Math.sin(t2*.9)+0.15);
  renderer.render(scene,camera);
})();
})();
