//your parameter variables go here!

//base values = 80
let rect_width  = 80;
let rect_height = 80;

//base values = 80
let tri_width = 80;
let tri_height = 80;

//change to set the outlines to go around all four sqaures or make a cross
let fourSqaures = false;
let showwhiteCross = true;


function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);

  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background("black"); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


yellowRect(10, 10);
greyRect(110, 110 );
pinkRect(10, 110);
blueRect(110, 10);
whiteLines();
whiteOutlineFour();
whiteCross();

}

function yellowRect(x, y) {
strokeWeight(2);
strokeWeight(1);
stroke(255, 227, 84);
noFill()
rect(x ,y, rect_width , rect_height); 
fill(255, 227, 84)
rect(x, y, rect_width / 2 , rect_height)
hatchRect(x, y, rect_width / 2, rect_height, 10);
}

function greyRect(x, y) {
noFill()
strokeWeight(1);
stroke(199, 191, 199)
rect(x ,y, rect_width , rect_height); 
fill(199, 191, 199);
rect(x ,y, rect_width / 2 , rect_height);
hatchRect(x, y, rect_width / 2, rect_height, 10);

}

function pinkRect(x, y) {
noFill()
strokeWeight(1);
stroke(226, 112, 164)
rect(x ,y, rect_width, rect_height);
noStroke();
fill(226, 112, 164);
triangle(x + tri_width, y + tri_height, x + tri_width, y, x, y + tri_height);
hatchTriPink(x, y, tri_width, tri_height, 10)


}

function blueRect(x, y) {
strokeWeight(1);
noFill()
stroke(74, 139, 235)
rect(x ,y, rect_width, rect_height);
noStroke()
fill(74, 139, 235);
triangle(x, y, x, y + tri_height, x + tri_width, y);
hatchTriBlue(x, y, tri_width, tri_height, 10)


}

function whiteLines() {
  noFill();
  stroke("white")
  beginShape()

  

  endShape()
}


function hatchRect(x, y, w, h, spacing = 0) {
  stroke('white');
  for (let i = 0; i < w; i += spacing) {
    line(x + i, y, x + i, y + h);
  }
}

function hatchTriBlue(x, y, w, h, spacing = 0) {
  stroke('white');
  for (let i = 0; i <= h; i += spacing) {
    let lineLength = map(i, 0, h, w, 0);
    line(x, y + i, x + lineLength, y + i);
  }

}

function hatchTriPink(x, y, w, h, spacing = 5) {
  stroke('white');
  for (let i = 0; i <= h; i += spacing) {
    let lineLength = map(i, 0, h, 0, w);
    line(x + w - lineLength, y + i, x + w, y + i);
  }

}


function whiteOutlineFour() {
  if (fourSqaures == true) {
    stroke("white")
    strokeWeight(5);
    rect(100, 100, 100, 100)
    rect(0, 0, 100, 100)
    rect(0, 100, 100, 100)
    rect(100, 0, 100, 100)
    stroke("black")
    strokeWeight(2);
    rect(100, 100, 100, 100)
    rect(0, 0, 100, 100)
    rect(0, 100, 100, 100)
      rect(100, 0, 100, 100)
  }
}

function whiteCross() {
  if (showwhiteCross == true) {

    //bottom
    stroke("white")
    strokeWeight(5);
    line(0, 120, 0, 280);
    line(-80, 200, 80, 200);

    stroke("black")
    strokeWeight(2);
    line(0, 120, 0, 280);
    line(-80, 200, 80, 200);

    //top right
    stroke("white");
    strokeWeight(5);
    line(120, 0, 280, 0);
    line(200, 80, 200, -80)
   

    stroke("black")
    strokeWeight(2);
    line(120, 0, 280, 0);
    line(200, 80, 200, -80)

  }
}






