control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    basic.showNumber(3)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P8, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    basic.showNumber(0)
})
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
	
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    basic.showNumber(6)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P14, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    basic.showNumber(0)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P14, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    basic.showNumber(4)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    basic.showNumber(0)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_D_DOWN, function () {
    basic.showNumber(4)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P8, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    basic.showNumber(8)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    basic.showNumber(5)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    basic.showNumber(0)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    basic.showNumber(0)
})
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
basic.showNumber(0)
pins.setEvents(DigitalPin.P8, PinEventType.Edge)
pins.setEvents(DigitalPin.P13, PinEventType.Edge)
pins.setEvents(DigitalPin.P14, PinEventType.Edge)
pins.setEvents(DigitalPin.P15, PinEventType.Edge)
pins.setEvents(DigitalPin.P16, PinEventType.Edge)
basic.forever(function () {
	
})
