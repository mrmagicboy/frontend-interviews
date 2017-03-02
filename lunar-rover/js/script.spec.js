'use strict';

beforeEach(function () {
	setFixtures('<div id="moon"></div><div id="lander"><div id="rover"></div></div>');
});

describe("The Lander", function () {

	it("can land on the Moon", function () {
		var lander = new Lander(),
		    moon = new Moon();

		expect(moon.element[0].children.length).toEqual(0);
		lander.landOn(moon);
		expect(moon.element[0].children.length).toEqual(1);
	});

	it("will land at a specific position", function () {
		var lander = new Lander(),
		    landerPosition = { top: 10, left: 50 },
		    moon = new Moon();

		lander.landOn(moon, landerPosition);
		expect(lander.element[0].offsetTop).toEqual(10);
		expect(lander.element[0].offsetLeft).toEqual(50);
	});
});

describe("The Rover", function () {

	it("can disembark the Lander", function () {
		var lander = new Lander(),
		    rover = new Rover();

		expect(lander.element[0].children.length).toEqual(1);
		lander.release(rover);
		expect(lander.element[0].children.length).toEqual(0);
	});

	it("will disembark initially at the Landers position", function () {
		var lander = new Lander(),
		    landerPosition = { top: 10, left: 50 },
		    rover = new Rover(),
		    roverPosition = landerPosition,
		    moon = new Moon();

		lander.landOn(moon, landerPosition);
		lander.release(rover, roverPosition);

		expect(lander.element[0].offsetTop).toEqual(rover.element[0].offsetTop);
	});

	it("can move around the Moon", function () {
		var rover = new Rover(),
		    moon = new Moon();

		rover.move(moon.element, { top: 50, left: 10 });
		expect(rover.element[0].offsetTop).toEqual(50);
		expect(rover.element[0].offsetLeft).toEqual(10);
	});
});
