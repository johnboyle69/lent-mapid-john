controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    ....................ccfff...........
    ..........fffffffffcbbbbf...........
    .........fbbbbbbbbbfffbf............
    .........fbb111bffbbbbff............
    .........fb11111ffbbbbbcff..........
    .........f1cccc11bbcbcbcccf.........
    ..........fc1c1c1bbbcbcbcccf...ccccc
    ............c3331bbbcbcbccccfccddbbc
    ...........c333c1bbbbbbbcccccbddbcc.
    ...........c331c11bbbbbcccccccbbcc..
    ..........cc13c111bbbbccccccffbccf..
    ..........c111111cbbbcccccbbc.fccf..
    ...........cc1111cbbbfdddddc..fbbcf.
    .............cccffbdbbfdddc....fbbf.
    ..................fbdbbfcc......fbbf
    ...................fffff.........fff
    `, SpriteKind.Enemy)
let mySprite3 = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `, SpriteKind.Food)
let mySprite4 = sprites.create(img`
    . . . . . . . . . c c c c c . . 
    . . . . . . c c c 5 5 5 5 c c . 
    . . . . c c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . c 1 1 1 b b 1 b b c c . . 
    . . . c 1 1 1 1 b 1 1 1 c . c c 
    . . . c d 1 1 1 b 1 1 1 c b 5 c 
    . . c c d 1 c 1 b 1 1 1 b b 5 c 
    c c c d d 1 1 1 b 1 b 1 5 5 5 c 
    f d d d 1 1 1 1 1 1 b 1 b b c c 
    . f f 1 1 1 1 1 1 b b 1 f . . . 
    . . . f 1 1 1 1 1 b b b f . . . 
    . . . . f f 1 1 b b 5 5 f . . . 
    . . . . . . f 5 5 5 5 5 f . . . 
    . . . . . . . f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
