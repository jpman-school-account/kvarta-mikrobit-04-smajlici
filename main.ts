input.onButtonPressed(Button.A, function () {
    buttonwasntpressed = 0
    basic.showLeds(`
        . . # . .
        # . . # .
        . . . # .
        # . . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    buttonwasntpressed = 0
    basic.showLeds(`
        . . . # .
        # . # . .
        . . # . .
        # . # . .
        . . . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    buttonwasntpressed = 0
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    buttonwasntpressed = 0
    basic.showLeds(`
        . . # . .
        # . # . .
        . . # . .
        # . # . .
        . . # . .
        `)
})
let buttonwasntpressed = 0
buttonwasntpressed = 1
basic.forever(function () {
    if (buttonwasntpressed) {
        basic.showLeds(`
            . . # . .
            # . . # .
            . . . # .
            # . . # .
            . . # . .
            `)
        basic.pause(1000)
    }
    if (buttonwasntpressed) {
        basic.showLeds(`
            . . # . .
            # . # . .
            . . # . .
            # . # . .
            . . # . .
            `)
        basic.pause(1000)
    }
    if (buttonwasntpressed) {
        basic.showLeds(`
            . . . # .
            # . # . .
            . . # . .
            # . # . .
            . . . # .
            `)
        basic.pause(1000)
    }
})
