class TelaMenu extends Phaser.Scene{
  constructor(){
    super("menu")
  }

  create(){

    const music = this.sound.add("click");

    const intro = this.sound.add("intro");
    intro.play()

    this.background = this.add.image(0,0,"back")
    this.background.setOrigin(0,0)
    this.background.setScale(1)

    this.titleGame = this.add.image(0,50, "title")
    this.titleGame.setOrigin(0,0)
    this.titleGame.setScale(0.98)

    this.tutorialGame = this.add.image( config.width / 3 + 60 , config.height /2 , "tutorial")
    this.tutorialGame.setOrigin(0,0)
    this.tutorialGame.setScale(0.6)
    this.tutorialGame.setInteractive().on('pointerdown', () =>
    {
        console.log('carregar a tela do tutorial');
        music.play();
        setTimeout( ()=>{this.scene.start("TelaTutorial")}, 100)

    });
    
    this.iniciarGame = this.add.image( config.width / 3 + 60 , config.height /2 + 80, "iniciar")
    this.iniciarGame.setOrigin(0,0)
    this.iniciarGame.setScale(0.6)
    this.iniciarGame.setInteractive().on('pointerdown', () =>
    {
        console.log('iniciar jogo');
        music.play();
        setTimeout( ()=>{this.scene.start("TelaFases")}, 100)

    });

    this.placaresGame = this.add.image( config.width / 3 + 60 , config.height /2 + 160, "placares")
    this.placaresGame.setOrigin(0,0)
    this.placaresGame.setScale(0.6)
    this.placaresGame.setInteractive().on('pointerdown', () =>
    {
        console.log('carregar a tela dos placares');
        music.play();
        setTimeout( ()=>{this.scene.start("TelaPlacares")}, 100)
    });
    
    this.creditosGame = this.add.image( config.width / 3 + 60 , config.height /2 + 240, "creditos")
    this.creditosGame.setOrigin(0,0)
    this.creditosGame.setScale(0.6)
    this.creditosGame.setInteractive().on('pointerdown', () =>
    {
        console.log('carregar a tela dos créditos e redes sociais');
        music.play();
        setTimeout( ()=>{this.scene.start("TelaCreditos")}, 100)
    });
    
    //setTimeout( ()=>{this.scene.start("playGameEasy")}, 1000)

  }
}