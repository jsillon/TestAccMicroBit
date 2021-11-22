let AXEx = 0
let AXEy = 0
let AXEz = 0
let NUM = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    AXEx = input.acceleration(Dimension.X)
    AXEy = input.acceleration(Dimension.Y)
    AXEz = input.acceleration(Dimension.Z)
    NUM = randint(0, 4)
    if (NUM == 4) {
        basic.showIcon(IconNames.Heart)
    } else if (NUM == 3) {
        basic.showIcon(IconNames.Rabbit)
    } else if (NUM == 2) {
        basic.showIcon(IconNames.Pitchfork)
    } else if (NUM == 1) {
        basic.showIcon(IconNames.Ghost)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
basic.forever(function () {
    serial.writeValue("x", AXEx)
    serial.writeValue("y", AXEy)
    serial.writeValue("z", AXEz)
})
