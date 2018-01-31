const Blinkt = require('node-blinkt');
const leds = new Blinkt();
leds.setup();

const DEFAULT_COLOUR = [255, 0, 0];

console.log('Flashing pixels');
leds.setAllPixels(255, 255, 255, 1);
leds.sendUpdate();

setTimeout(() => {
    let colour = process.env.COLOUR ? JSON.parse(process.env.COLOUR) : DEFAULT_COLOUR;
    console.log('Setting colour to', colour);
    leds.setAllPixels(...colour, 0.4);
    leds.sendUpdate();
}, 1000);