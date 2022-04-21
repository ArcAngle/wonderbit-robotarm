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
