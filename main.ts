radio.onReceivedNumber(function (receivedNumber) {
    servos.P0.setAngle(0)
})
input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(90)
})
radio.setGroup(86)
