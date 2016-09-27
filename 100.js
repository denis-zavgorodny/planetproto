// -> Створіть функцію коструктор 'Robot'
// -> Створіть два екземпляра Robot: 'robby' та 'cranky'
// -> robby та cranky повинні мати властивості 'parts' та 'capabilities'
//    на початку це пусті масиви

function Robot() {
	this.parts = [];
}

var robby = new Robot();
var cranky = new Robot();

Robot.prototype.capabilities = [];


// -> Що поверне robby.parts
claim(robby.parts, []);
// -> А що cranky.parts
claim(cranky.parts, []);
// -> Що поверне robby.capabilities
claim(robby.capabilities, []);
// -> А що cranky.capabilities
claim(cranky.capabilities, []);

// -> Додайте 'core' до robby.parts, cranky.parts при цьому має залишитися пустим
// -> Додайте 'fly' до robby.capabilities, але cranky.capabilities також повінно отримати 'fly',
//    але, не можна додавати 'fly' напряму до cranky.capabilities. Ця властивість має бути розподіленою.

robby.parts.push('core');
Robot.prototype.capabilities = ['fly'];

// -> Що поверне robby.parts
claim(robby.parts, ['core']);
// -> А що cranky.parts
claim(cranky.parts, []);
// -> Що поверне robby.capabilities
claim(robby.capabilities, ['fly']);
// -> А що cranky.capabilities
claim(cranky.capabilities, ['fly']);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby,
	cranky: cranky
}
