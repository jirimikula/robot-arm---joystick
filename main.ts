joystickbit.initJoystickBit()
radio.setGroup(0)
basic.showIcon(IconNames.Pitchfork)
music.setVolume(60)
music.playTone(131, music.beat(BeatFraction.Quarter))
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 10) {
        radio.sendNumber(4)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 1010) {
        radio.sendNumber(3)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 10) {
        radio.sendNumber(2)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 1010) {
        radio.sendNumber(1)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendNumber(5)
        music.playTone(784, music.beat(BeatFraction.Quarter))
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
        music.playTone(880, music.beat(BeatFraction.Quarter))
    } else {
        radio.sendNumber(0)
    }
})
