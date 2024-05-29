class PerguntarNome extends Phaser.Scene{
  constructor(){
    super("PerguntarNome")
  }

  create(){ 

    console.log("entrei na funcao perguntarNome()")
    this.background_preto = this.add.image( config.width /2 , config.height/2, "background_preto")
    this.TelaNome = this.add.image( config.width /2 , config.height/2 , "TelaNome")
    this.TelaNome_Botao_jogar = this.add.image( (config.width /2) + 400 , 386, "TelaNome_Botao_jogar").setInteractive().on('pointerdown', () =>
      {
          flagNovoJogador = true 
          // aqui eu devo colocar algum metodo para validar o que a pessoa digitou 
          console.log('voltar para tela menu');
          setTimeout( ()=>{this.scene.start("TelaFases")}, 200)
      });
    this.TelaNome_Botao_manter = this.add.image( config.width /2 , (config.height/2) + 155, "TelaNome_Botao_manter").setDepth(0)
     

    const textEntry = this.add.text((config.width /6) - 5  , 355, '', { font: '62px Courier', fill: '#000000' }).setOrigin(0,0).setDepth(1);

    this.input.keyboard.on('keydown', event =>
    {
        this.TelaNome = this.add.image( (config.width /6) - 20  , 355, "TelaNome_escrevendo").setOrigin(0,0).setScale(1.2)// para fazer desaparecer o nome digite seu nome
        if (event.keyCode === 8 && textEntry.text.length > 0)
        {
            textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
        }
        else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode <= 90) && textEntry.text.length < 10)// so vai exibir na tela se for menos de 10 caracteres o nome 
        {
            textEntry.text += event.key;
        }
    });



    //this.TelaNome_Botao_jogar_clicado = this.add.image( config.width /2 , config.height/2, "TelaNome_Botao_jogar_clicado")
  }

}