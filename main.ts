input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(150)
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(50)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 4; index++) {
        servos.P0.setAngle(50)
        basic.pause(200)
        servos.P0.setAngle(150)
        basic.pause(200)
    }
    servos.P0.setAngle(90)
})
servos.P0.setAngle(90)
