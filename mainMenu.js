
BasicGame.MainMenu = function (game) {

  this.music = null;
  this.playButton = null;

};

BasicGame.MainMenu.prototype = {
  preload: function () {
    this.load.image('titlepage', 'assets/titlepage.png');
  },

  create: function () {
    this.add.sprite(0, 0, 'titlepage');
  },

  update: function () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.Z) || this.input.activePointer.isDown) {
      this.startGame();
    }
  },

  startGame: function (pointer) {
    this.state.start('Game');
  }
};
