//your parameter variables go here!

//base values = 80
let rect_width  = 40;
let rect_height = 40;

//base values = 80
let tri_width = 80;
let tri_height = 80;

//base values = 20
let circle_height = 20;
let circle_width = 20;





function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background("black"); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

whiteDots();
yellowRect(10, 10);
greyRect(110, 110 );
pinkRect(10, 110);
blueRect(110, 10);

}

function yellowRect(x, y) {
strokeWeight(2);
strokeWeight(1);
stroke(222, 215, 20);
noFill()
rect(x ,y, rect_width , rect_height); 
fill(222, 215, 20)
rect(x, y, rect_width / 2 , rect_height)
hatchRect(x, y, rect_width / 2, rect_height, 3);
}

function greyRect(x, y) {
noFill()
strokeWeight(1);
stroke(199, 191, 199)
rect(x ,y, rect_width , rect_height); 
fill(199, 191, 199);
rect(x ,y, rect_width / 2 , rect_height);
hatchRect(x, y, rect_width / 2, rect_height, 3);

}

function pinkRect(x, y) {
noFill()
strokeWeight(1);
stroke(219, 143, 217)
rect(x ,y, rect_width, rect_height);
noStroke();
fill(219, 143, 217);
triangle(x + tri_width, y + tri_height, x + tri_width, y, x, y + tri_height);

}

function blueRect(x, y) {
strokeWeight(1);
noFill()
stroke(23, 68, 145)
rect(x ,y, rect_width, rect_height);
noStroke()
fill(23, 68, 145);
triangle(x, y, x, y + tri_height, x + tri_width, y);
}

function whiteDots() {
  // return();
  if (rect_width > 60 );
    ellipse(55, 40, circle_height, circle_height);
    ellipse(155, 140, circle_width, circle_height);

  }

function hatchRect(x, y, w, h, spacing = 0) {
  stroke('white');
  for (let i = 0; i < w; i += spacing) {
    line(x + i, y, x + i, y + h);
 }

}