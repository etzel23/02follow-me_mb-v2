let arrow_up = 0
let arrow_right = 0
let arrow_left = 0
let arrow_down = 0
let FB = 0
let GOING = 0
function F_arrow_up () {
    if (arrow_up == 0) {
        led.plot(0, 2)
        led.plot(1, 1)
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(3, 1)
        led.plot(4, 2)
    }
    if (arrow_up == 1) {
        led.plot(0, 1)
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 0)
        led.plot(4, 1)
    }
    if (arrow_up == 2) {
        led.plot(0, 0)
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(4, 0)
    }
    if (arrow_up == 3) {
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 4)
    }
    if (arrow_up == 4) {
        led.plot(1, 4)
        led.plot(2, 0)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(3, 4)
    }
    if (arrow_up == 5) {
        led.plot(0, 4)
        led.plot(1, 3)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 2)
        led.plot(3, 3)
        led.plot(4, 4)
    }
    if (arrow_up == 6) {
        led.plot(0, 3)
        led.plot(1, 2)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(3, 2)
        led.plot(4, 3)
    }
    basic.pause(150)
}
function F_arrow_right () {
    if (arrow_right == 0) {
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 0)
        led.plot(2, 2)
        led.plot(2, 4)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(4, 2)
    }
    if (arrow_right == 1) {
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 0)
        led.plot(3, 2)
        led.plot(3, 4)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
    }
    if (arrow_right == 2) {
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 0)
        led.plot(4, 2)
        led.plot(4, 4)
    }
    if (arrow_right == 3) {
        led.plot(0, 2)
        led.plot(3, 2)
        led.plot(4, 2)
    }
    if (arrow_right == 4) {
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(1, 2)
        led.plot(4, 2)
    }
    if (arrow_right == 5) {
        led.plot(0, 0)
        led.plot(0, 2)
        led.plot(0, 4)
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(2, 2)
    }
    if (arrow_right == 6) {
        led.plot(0, 2)
        led.plot(1, 0)
        led.plot(1, 2)
        led.plot(1, 4)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(4, 2)
    }
    basic.pause(150)
}
function F_arrow_left () {
    if (arrow_left == 0) {
        led.plot(0, 2)
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(2, 0)
        led.plot(2, 2)
        led.plot(2, 4)
        led.plot(3, 2)
        led.plot(4, 2)
    }
    if (arrow_left == 1) {
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(1, 0)
        led.plot(1, 2)
        led.plot(1, 4)
        led.plot(2, 2)
        led.plot(3, 2)
    }
    if (arrow_left == 2) {
        led.plot(0, 0)
        led.plot(0, 2)
        led.plot(0, 4)
        led.plot(1, 2)
        led.plot(2, 2)
    }
    if (arrow_left == 3) {
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(4, 2)
    }
    if (arrow_left == 4) {
        led.plot(0, 2)
        led.plot(3, 2)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
    }
    if (arrow_left == 5) {
        led.plot(2, 2)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(4, 0)
        led.plot(4, 2)
        led.plot(4, 4)
    }
    if (arrow_left == 6) {
        led.plot(1, 2)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 0)
        led.plot(3, 2)
        led.plot(3, 4)
        led.plot(4, 2)
    }
    basic.pause(150)
}
function F_arrow_down () {
    if (arrow_down == 0) {
        led.plot(0, 2)
        led.plot(1, 3)
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(3, 3)
        led.plot(4, 2)
    }
    if (arrow_down == 1) {
        led.plot(0, 3)
        led.plot(1, 4)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 3)
    }
    if (arrow_down == 2) {
        led.plot(0, 4)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        led.plot(4, 4)
    }
    if (arrow_down == 3) {
        led.plot(2, 0)
        led.plot(2, 3)
        led.plot(2, 4)
    }
    if (arrow_down == 4) {
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 4)
        led.plot(3, 0)
    }
    if (arrow_down == 5) {
        led.plot(0, 0)
        led.plot(1, 1)
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(3, 1)
        led.plot(4, 0)
    }
    if (arrow_down == 6) {
        led.plot(0, 1)
        led.plot(1, 2)
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(3, 2)
        led.plot(4, 1)
    }
    basic.pause(150)
}
basic.forever(function () {
    if (TobbieII.LBlock(300) && TobbieII.RBlock(300)) {
        arrow_up = arrow_up + 1
        TobbieII.backward()
        F_arrow_up()
        music.playTone(262, music.beat(BeatFraction.Eighth))
        FB = 1
    } else if (TobbieII.LBlock(50) && TobbieII.RBlock(50)) {
        arrow_down = arrow_down + 1
        TobbieII.forward()
        F_arrow_down()
        music.playTone(262, music.beat(BeatFraction.Eighth))
        FB = -1
    } else if (TobbieII.LBlock(200) && TobbieII.RBlock(200)) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        if (GOING > 0) {
            TobbieII.leftward()
            control.waitMicros(500)
            GOING = 0
            TobbieII.stopwalk()
        } else if (GOING < 0) {
            TobbieII.rightward()
            control.waitMicros(500)
            GOING = 0
            TobbieII.stopwalk()
        } else if (FB > 0) {
            TobbieII.forward()
            control.waitMicros(500)
            TobbieII.stopwalk()
        } else if (FB < 0) {
            TobbieII.backward()
            control.waitMicros(500)
            TobbieII.stopwalk()
        }
        GOING = 0
        FB = 0
    } else if (!(TobbieII.LBlock(400)) && TobbieII.RBlock(400)) {
        arrow_right = arrow_right + 1
        TobbieII.leftward()
        F_arrow_right()
        GOING = -1
    } else if (TobbieII.LBlock(400) && !(TobbieII.RBlock(400))) {
        arrow_left = arrow_left + 1
        TobbieII.rightward()
        F_arrow_left()
        GOING = 1
    } else {
        GOING = 0
        FB = 0
        TobbieII.stopwalk()
        TobbieII.stopturn()
    }
    basic.clearScreen()
    if (arrow_up == 6) {
        arrow_up = 0
    }
    if (arrow_down == 6) {
        arrow_down = 0
    }
    if (arrow_left == 6) {
        arrow_left = 0
    }
    if (arrow_right == 6) {
        arrow_right = 0
    }
})
