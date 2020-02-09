namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
info.startCountdown(30)
let Ghost = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
Ghost.setPosition(141, 105)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . 8 8 8 5 . . . . 
. . . . . 8 8 8 8 8 5 . . . 
. . . . 8 5 8 8 5 8 8 5 . . 
. . . . 8 8 8 8 8 8 8 5 . . 
. . . . 8 5 8 8 5 8 8 5 . . 
. . . . 8 8 5 5 8 8 8 5 . . 
. . . . . 8 8 8 8 8 5 . . . 
. . . . . . 8 8 8 5 . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000010b0b0b0b0b0b0b0b0b0b0b0b0b10080b070a070807090a090b070a07080a070b0b0b0b0b080f0b0b0b0b0b0b1008030b080b0b0b080b0b0a0b080b090b090b0b07080907070b0807080807080b090b0b0a0b0b0b0b0b0b0b0b0b0b0b0b070b0b070b07080708070b0708070b0a080b0e0b0b0b10080f0b0b070f0b0b0a080b08080a070b090b080b080b070b070a0b0b0b0b0b0b070b070b070b0a0b0a0f0b0b0b0b0708090b080b080b080b070b070709070a0f0b0b0a0b0b0b070b0b0b090f0b0b070b0b080709070b08090a070a0b070b080b0b0b0b0b0b0b0b0b0b080b0b0a0b070b0708070b080a070b0a070b0e070b0b0b0b0b0a0b0b070b0b0b0b11`,
            img`
. . . . . . . . . . . . . . . 2 
. 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
. . . . . 2 . . . . . . . . 2 . 
. 2 . . . 2 . . 2 . 2 . 2 . 2 . 
. 2 2 2 2 2 . 2 2 2 2 2 2 . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . 2 2 2 2 2 . 2 2 2 . . 2 . 
. . . . . 2 . . . 2 . . . . 2 . 
. 2 2 2 . 2 . 2 . 2 . 2 . 2 2 . 
. . . . . 2 . 2 . 2 . 2 . 2 . . 
. . . 2 2 2 . 2 . 2 . 2 . 2 . 2 
2 2 2 2 . . . 2 . . . 2 . . . 2 
. . . 2 . . 2 2 2 2 . 2 2 2 2 2 
. 2 . 2 . . . . . . . . . . 2 . 
. 2 . 2 . 2 2 2 . 2 2 2 . 2 2 . 
. 2 . . . . . 2 . . 2 . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.floorLight2,sprites.dungeon.floorLight4,sprites.dungeon.stairLadder,sprites.dungeon.floorDark2,sprites.dungeon.stairWest,sprites.dungeon.stairEast,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight2)
scene.cameraFollowSprite(mySprite)
Ghost.follow(mySprite)
