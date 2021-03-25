let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    ......cc66......
    .....c6576c.....
    ....c677576c....
    ....cc677666....
    ...cc6c6667cc...
    ..6c666777cc6c..
    ..c76666766776..
    ..c6777777776c..
    ..cc67777776cc..
    .c67cc76676676c.
    .c777666667777c.
    .c6777777777766.
    .cc7767776776666
    c676cc6766666776
    c777766666677776
    cc7777777777776c
    .c676777677767c.
    ..cc667666766c..
    ...ccc6c66ccc...
    .....cccccc.....
    .......ee.......
    ......eeee......
    .....eeeeee.....
    .......ee.......
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
