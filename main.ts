input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    servo1 = 80
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    servo1 = 10
})
let servo1 = 0
WonderBit.Initialise()
servo1 = 30
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    WonderBit.Servo(servo1, servo1)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.soundLevel() >= 125) {
        basic.showIcon(IconNames.Heart)
        for (let index = 0; index < 6; index++) {
            servo1 = 80
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(500)
            servo1 = 10
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(500)
        }
        basic.pause(100)
        basic.clearScreen()
    } else {
        servo1 = 30
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
