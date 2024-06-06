class TelaCreditos extends Phaser.Scene{
  constructor(){
    super("TelaCreditos")
  }

  create(){
    const music = this.sound.add("click");
    console.log("entrei na cena tela creditos-------------------")

    this.background = this.add.image(0,0,"back")
    this.background.setOrigin(0,0)
    this.background.setScale(1)

    this.titleGame = this.add.image( config.width/2 ,120, "title")
    this.titleGame.setScale(0.2)

    this.voltar = this.add.image( config.width /2 , config.height - 100 , "Botao_Fase_voltar")
    this.voltar.setInteractive().on('pointerdown', () =>
    {
        console.log('voltar para tela menu');
        music.play()

        setTimeout( ()=>{this.scene.start("menu")}, 200)
    });
    
    this.TelaCreditos = this.add.image( config.width /2 , config.height/2 , "TelaCreditos")
    //setTimeout( ()=>{this.scene.start("playGameEasy")}, 5000)

  }
}