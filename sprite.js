Sprite = function(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var sprite_cenario = new Sprite(0, 0, 600, 600),
	sprite_personagem = new Sprite(618, 16, 87, 87),

	sprite_perdeu = new Sprite(603, 478, 397, 358),
	sprite_jogar = new Sprite(603, 127, 397, 347),
	sprite_novo = new Sprite(68, 721, 287, 93),
	sprite_recorde = new Sprite(28, 879, 441, 95),
	sprite_chao = new Sprite(0, 604, 600, 54);