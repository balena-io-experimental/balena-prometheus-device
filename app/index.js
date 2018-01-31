const Blinkt = require('node-blinkt');
const leds = new Blinkt();
leds.setup();

const DEFAULT_COLOUR = [255, 0, 0];

leds.setAllPixels(255, 255, 255, 1);
leds.sendUpdate();

setTimeout(() => {
    let colour = process.env.COLOUR ? JSON.parse(process.env.COLOUR) : DEFAULT_COLOUR;
    leds.setAllPixels(...DEFAULT_COLOUR, 0.5);
    leds.sendUpdate();
}, 1000);