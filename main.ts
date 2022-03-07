input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(70)
})
input.onSound(DetectedSound.Loud, function () {
    soundExpression.giggle.playUntilDone()
    for (let index = 0; index < 4; index++) {
        servos.P0.setAngle(70)
        basic.pause(200)
        servos.P0.setAngle(30)
        basic.pause(200)
    }
    servos.P0.setAngle(50)
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.setAngle(30)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(50)
})
servos.P0.setAngle(50)
input.setSoundThreshold(SoundThreshold.Loud, 179)
