class TelaTutorial extends Phaser.Scene{

  constructor(){
      super("TelaTutorial")
      this.moveCam = false;
  }
  
    create(){   

        //config.height = 3 * 764

        this.background = this.add.image(0,0,"back")
        this.background.setOrigin(0,0)
        this.background.setScale(1)

        this.background1 = this.add.image(0,764,"back")
        this.background1.setOrigin(0,0)
        this.background1.setScale(1)
    
        this.TextoTutorial = this.add.image( (config.width/2) , (config.height/2 )  + 140 , "TelaTutorial").setScale(0.3).setDepth(0)

        this.player = this.physics.add.image( config.width/2 ,  100 , "TelaTutorial_move").setScale(0.3).setDepth(3)

        this.header = this.add.image( config.width /2 , 49.5  , "TelaTutorialheader").setScale(0.4).setDepth(1)

        this.Botao_Fase_voltar = this.add.image(  420 , config.height/2 - 200 , "Botao_Fase_voltar").setScale(0.5).setDepth(2)
        this.Botao_Fase_voltar.setInteractive().on('pointerdown', () =>
        {

            config.height = 764
            console.log('voltar para tela menu');
            const music = this.sound.add("click");
            music.play()
            this.scene.start("menu")
        });



        this.cameras.main.setBounds(0, 0, 3* 764,  1364);
        this.cursors = this.input.keyboard.createCursorKeys(); // add controle
        this.player.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.player, true);
        this.cameras.main.setZoom(2);
    }

    update ()
    {
        const cam = this.cameras.main;

        this.player.setVelocity(0);

        if (this.moveCam)
        {
            if (this.cursors.up.isDown)
            {
                cam.scrollY -= 100;
            }
            else if (this.cursors.down.isDown)
            {
                cam.scrollY += 100;
            }

        }
        else
        {
            if (this.cursors.up.isDown)
            {
                this.player.setVelocityY(-400);
            }
            else if (this.cursors.down.isDown)
            {
                this.player.setVelocityY(400);
            }

        }
    }
}