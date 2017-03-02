'use strict';

// Model the Moon, Lander and Rover as separate objects

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Moon = function Moon() {
	_classCallCheck(this, Moon);

	this.element = $('#moon');
};

// The Lander can land on the Moon
// The Lander will land at a specific position


var Lander = function () {
	function Lander() {
		_classCallCheck(this, Lander);

		this.element = $('#lander');
	}

	_createClass(Lander, [{
		key: 'landOn',
		value: function landOn(planet) {
			var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { top: 10, left: 50 };

			this.element.css({
				top: position.top,
				left: position.left
			});
			planet.element.append(this.element);
		}
	}, {
		key: 'release',
		value: function release(object) {
			var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { top: 10, left: 50 };

			object.element.css({
				top: position.top,
				left: position.left
			});
			this.element.parent().append(object.element);
		}
	}]);

	return Lander;
}();

// The Rover can disembark the Lander
// The Rover will disembark initially at the Landers position
// The Rover can move around the Moon


var Rover = function () {
	function Rover() {
		_classCallCheck(this, Rover);

		this.element = $('#rover');
	}

	_createClass(Rover, [{
		key: 'move',
		value: function move(planet, position) {
			this.element.css({
				top: position.top,
				left: position.left
			});
			planet.append(this.element);
		}
	}]);

	return Rover;
}();

$(document).ready(function () {
	var moon = new Moon(),
	    lander = new Lander(),
	    rover = new Rover();

	lander.landOn(moon, { top: 10, left: 50 });
});
