'use strict';

var IMAGE_TURTLE = document.getElementById('IMAGE_TURTLE');

var TURTLE_SPEED = 125;
var TURTLE_JUMP = 350;

function Turtle(){
	this.flipImage = false;
	Entity.call(this, {
		image: IMAGE_TURTLE
	});
	this.pos = {x: canvas.width/2, y: world.getGroundAt(canvas.width/2) - this.image.height/2}
}

Turtle.prototype = Object.create(Entity.prototype);
Turtle.prototype.constructor = Turtle;

Turtle.prototype.update = function(delta){
	// Move left and right
	this.velocity.x = 0;
	if(controller.buttons.left){
		this.velocity.x = -TURTLE_SPEED;
		this.flipImage = false;
	}
	if(controller.buttons.right){
		this.velocity.x = TURTLE_SPEED;
		this.flipImage = true;
	}

	// Jump
	if(controller.buttons.jump){
		this.jump(TURTLE_JUMP);
	}

	Entity.prototype.update.call(this, delta);

	if(this.pos.x - this.image.width/2 < 0){
		this.pos.x = this.image.width/2
	}
	if(this.pos.x + this.image.width/2 > canvas.width){
		this.pos.x = canvas.width - this.image.width/2;
	}
}
