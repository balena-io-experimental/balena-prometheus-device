var Blinkt = require('node-blinkt');
var leds = new Blinkt();
leds.setup();

leds.setAllPixels(255, 255, 255, 0.1);
leds.sendUpdate();
setTimeout(updateLeds, 1000);