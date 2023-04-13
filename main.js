class Background extends Phaser.Scene{
    constructor()
    {
        super({key:'backgd'});
    }
    preload(){
        this.load.image('sky','images/sky.png');
        this.load.image('aliens','images/alienbusters.png');
    }
     create(){
        const text = this.add.text(10, 100, 'Click me to start Scene2', { fontSize: '32px' });
        text.setInteractive();
    
        text.on('pointerdown', () => {
          this.scene.start('frontview');
        });
      }
    update(){
        
    }
}

class Frontview extends Phaser.Scene{
    constructor()
    {
        super({key:'frontview'});
    }
        create() {
            this.add.image(50, 100,'sky');
            this.add.image(200, 500,'aliens');
            const text = this.add.text(100, 100, 'Welcome to Scene2', { fontSize: '32px' });
          }
}

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#2d2d2d',
    scene: [ Background,Frontview ]
};

const game = new Phaser.Game(config);