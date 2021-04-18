//地震的相關資料
let jsonobj;
let btns=[];//管理所有的btn

//預先讀取(在執行之前先讀取
function preload(){
  jsonobj = loadJSON('data.json'); //檔案路徑
  img = loadImage('assests/map.jpg');
}

function setup() {
  createCanvas(360, 400);
  console.log(jsonobj);
  //console.log(jsonobj.metadata.url);
  //console.log(jsonobj.features[0].geometry.coordinates); 
  //console.log(jsonobj.features[0].geometry.coordinates); 
  
  //把資訊視覺化
  jsonobj.features.forEach((v)=>{ 
    let lat =v.geometry.coordinates[0];
    let lang =v.geometry.coordinates[1];
    let mag =v.properties.mag;
    
    noStroke();
    fill(0,0,255,mag*mag*2);
    btns.push(new btn((lat+180),180-(lang+90),mag*mag*0.5));
      });
}

function draw() { 
  //background(220);
  image(img, 0, 0,360,180);


  btns.forEach((b)=>{
    b.display();
  });
}
   /* if (mouseIsPressed) {
    textSize(20);
    fill(0, 0, 0);
    text("震度：", 20, 210);
  } else {

  }

}*/


//賦予每個按鈕功能
class btn{
    constructor(x,y,size){
    this.x=x;
    this.y=y;
    this.size=size;
  }
  display (){    
  if (mouseX>this.x-this.size/2 &&
      mouseX<this.x+this.size/2 &&
      mouseY>this.y-this.size/2 &&
      mouseY<this.y+this.size/2){
        fill(255,215,0,this.size*2);
        square(this.x,this.y,this.size);
      if(mouseIsPressed){
        push();
        text(jsonobj.metadata.title, 10, 210);
        fill(255);
        rect(0,220,360,110);
        fill(0, 0, 0);
        textSize(24);
        text("經度："+this.x, 10, 250);
        text("緯度："+this.y, 10, 280);
        text("震度："+this.size/6, 10, 310);
        pop();
      }
    }else{
      fill(	72,209,204,this.size*2);
    }
    noStroke();
    circle(this.x,this.y,this.size);
  }
      
}
    
   



