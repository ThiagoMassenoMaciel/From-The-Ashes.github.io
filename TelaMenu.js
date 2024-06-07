class TelaMenu extends Phaser.Scene{
  constructor(){
    super("menu")
  }

  create(){
    
    const music = this.sound.add("click");
    const intro = this.sound.add("intro");

    intro.play()

    musicaOutrasTelas = this.sound.add("outrasTelas");
    musicaOutrasTelas.setLoop(true);
    
    if( !desativarMUSICAfundo){ // quando esta variavel for false retorna verdadeiro // quando a variavel é verdadeira   true != true RETORNA falso e executa o else
// o valor que o if ta pedindo é true , o valor que a variavel retorna é false - logo a afirmacção true é diferente de false   true != falso RESULTA EM  true,
// logo vai executar o primeiro pedaço do if
// QUANDO A VARIAVEL TIVER VALOR FALSE deixar o som rolar 
      musicaOutrasTelas.play()
    }else{ // quando variavel tiver true, parar o som --------- a variavel global vai ficar true quando entrar na tela2 
      //musicaOutrasTelas.    
      musicaOutrasTelas.stop()
    }
    
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
        desativarMUSICAfundo = true
        intro.stop()
        music.play();
        setTimeout( ()=>{this.scene.start("TelaTutorial")}, 100)

    });
    
    this.iniciarGame = this.add.image( config.width / 3 + 60 , config.height /2 + 80, "iniciar")
    this.iniciarGame.setOrigin(0,0)
    this.iniciarGame.setScale(0.6)
    this.iniciarGame.setInteractive().on('pointerdown', () =>
    {
        console.log('iniciar jogo');
        desativarMUSICAfundo = true
        intro.stop()
        music.play();
        setTimeout( ()=>{this.scene.start("TelaFases")}, 100)

    });

    this.placaresGame = this.add.image( config.width / 3 + 60 , config.height /2 + 160, "placares")
    this.placaresGame.setOrigin(0,0)
    this.placaresGame.setScale(0.6)
    this.placaresGame.setInteractive().on('pointerdown', () =>
    {
        console.log('carregar a tela dos placares');
        desativarMUSICAfundo = true
        intro.stop()
        music.play();
        setTimeout( ()=>{this.scene.start("TelaPlacares")}, 100)
    });
    
    this.creditosGame = this.add.image( config.width / 3 + 60 , config.height /2 + 240, "creditos")
    this.creditosGame.setOrigin(0,0)
    this.creditosGame.setScale(0.6)
    this.creditosGame.setInteractive().on('pointerdown', () =>
    {
        console.log('carregar a tela dos créditos e redes sociais');
        desativarMUSICAfundo = true
        intro.stop()
        music.play();
        setTimeout( ()=>{this.scene.start("TelaCreditos")}, 100)
    });
    
    //setTimeout( ()=>{this.scene.start("playGameEasy")}, 1000)

  }
}