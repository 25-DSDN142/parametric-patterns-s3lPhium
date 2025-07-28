//your parameter variables go here!

//base values = 80
let rect_width  = 10;
let rect_height = 40;

let tri_width = 60;
let tri_height = 25;





function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
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

greenDots();
yellowRect(10, 10);
whiteRect(110, 110 );
pinkRect(10, 110);
blueRect(110, 10);

}

function yellowRect(x, y) {
strokeWeight(2);
strokeWeight(1);
stroke("yellow");
noFill()
rect(x ,y, rect_width , rect_height); 
fill("yellow")
rect(x, y, rect_width / 2 , rect_height)
}

function whiteRect(x, y) {
noFill()
strokeWeight(1);
stroke("white")
rect(x ,y, rect_width , rect_height); 
fill("white");
rect(x ,y, rect_width / 2 , rect_height);

}

function pinkRect(x, y) {
noFill()
strokeWeight(1);
stroke("pink")
rect(x ,y, rect_width, rect_height);
noStroke();
fill("pink");
triangle(x + tri_width, y + tri_height, x + tri_width, y, x, y + tri_height);

}

function blueRect(x, y) {
strokeWeight(1);
noFill()
stroke("blue")
rect(x ,y, rect_width, rect_height);
noStroke()
fill("blue");
triangle(x, y, x, y + tri_height, x + tri_width, y);
}

function greenDots() {
  if (rect_width <= 60 && rect_height <= 60) {
    ellipse(55, 40, 15, 15)
    ellipse(155, 140, 15, 15)
  }

}