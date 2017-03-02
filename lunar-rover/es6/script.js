'use strict';

// Model the Moon, Lander and Rover as separate objects
class Moon {
	constructor() {
		this.element = $('#moon');
	}
}

// The Lander can land on the Moon
// The Lander will land at a specific position
class Lander {

	constructor() {
		this.element = $('#lander');
	}

	landOn(planet, position={ top: 10, left: 50 }) {
		this.element.css({
			top: position.top,
			left: position.left
		});
		planet.element.append(this.element);
	}

	release(object, position={ top: 10, left: 50 }) {
		object.element.css({
			top: position.top,
			left: position.left
		});
		this.element.parent().append(object.element);
	}

}

// The Rover can disembark the Lander
// The Rover will disembark initially at the Landers position
// The Rover can move around the Moon
class Rover {

	constructor() {
		this.element = $('#rover')
	}

	move(planet, position) {
		this.element.css({
			top: position.top,
			left: position.left
		});
		planet.append(this.element);
	}

}

$(document).ready(function() {
	let moon = new Moon(),
		lander = new Lander(),
		rover = new Rover();

	lander.landOn(moon, { top: 10, left: 50 });
});
