# WonderKit by MakeKit - Robotarm


## Vi begynner med lysbrytere

Det første vi gjør er å bruke knapp A og B til å slå lyset av og på 

Vi trenger da to blokker fra ``||input:Inndata||``, som vist under

```cards
input.onButtonPressed(Button.A, function () {
	
})
```

En for knapp A og en for knapp B, disse skal vi bruke til å slå den av og på med, vi vil da ha denne koden

```blocks
input.onButtonPressed(Button.A, function () {
	
})

input.onButtonPressed(Button.B, function () {
	
})
```


input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    servo1 = 45
})
let servo1 = 0
WonderBit.Initialise()
servo1 = 45
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    WonderBit.Servo(servo1, servo1)
    if (input.buttonIsPressed(Button.A) || input.soundLevel() >= 125) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        for (let index = 0; index < 6; index++) {
            servo1 = 80
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            basic.pause(1000)
            servo1 = 10
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(250)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(750)
        }
        basic.clearScreen()
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        servo1 = 45
    }
})

