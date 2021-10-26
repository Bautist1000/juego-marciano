statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
function Creatingenemies () {
    Enemy_1 = sprites.create(assets.image`Enemy 1`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_1, tiles.getTileLocation(39, 20))
    Enemy_12 = sprites.create(assets.image`Enemy 1`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_12, tiles.getTileLocation(28, 48))
    Enemy_13 = sprites.create(assets.image`Enemy 1`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_13, tiles.getTileLocation(60, 31))
    Enemy_14 = sprites.create(assets.image`Enemy 1`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_14, tiles.getTileLocation(64, 15))
    Enemy_21 = sprites.create(assets.image`Enemy 2`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_21, tiles.getTileLocation(10, 36))
    Enemy_22 = sprites.create(assets.image`Enemy 2`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_22, tiles.getTileLocation(41, 60))
    Enemy_23 = sprites.create(assets.image`Enemy 2`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_23, tiles.getTileLocation(54, 28))
    Enemy_24 = sprites.create(assets.image`Enemy 2`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_24, tiles.getTileLocation(65, 23))
    Enemy_31 = sprites.create(assets.image`Enemy 3`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_31, tiles.getTileLocation(28, 35))
    Enemy_32 = sprites.create(assets.image`Enemy 3`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_32, tiles.getTileLocation(22, 62))
    Enemy_33 = sprites.create(assets.image`Enemy 3`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_33, tiles.getTileLocation(49, 45))
    Enemy_34 = sprites.create(assets.image`Enemy 3`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_34, tiles.getTileLocation(59, 8))
    Enemy_41 = sprites.create(assets.image`King enemy`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_41, tiles.getTileLocation(18, 36))
    Enemy_42 = sprites.create(assets.image`King enemy`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_42, tiles.getTileLocation(4, 26))
    Enemy_43 = sprites.create(assets.image`King enemy`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_43, tiles.getTileLocation(62, 67))
    Enemy_44 = sprites.create(assets.image`King enemy`, SpriteKind.Enemy)
    tiles.placeOnTile(Enemy_44, tiles.getTileLocation(65, 52))
}
function Starting () {
    blockMenu.showMenu([
    "Play",
    "How to play",
    "About"
    ], MenuStyle.List, MenuLocation.BottomHalf)
    scene.setBackgroundColor(11)
    blockMenu.setColors(0, 13)
    textSprite = textsprite.create("INTROSPECTION", 0, 10)
    textSprite.setMaxFontHeight(11)
    Text_Front = textsprite.create("INTROSPECTION", 0, 8)
    Text_Front.setMaxFontHeight(11)
    Text_Back = textsprite.create("INTROSPECTION", 0, 12)
    Text_Back.setMaxFontHeight(11)
    textSprite.setPosition(80, 25)
    Text_Front.setPosition(80, 25)
    Text_Back.setPosition(80, 25)
    Text_Front.z = textSprite.z - 10
    story.spriteMoveToLocation(Text_Front, 85, 30, 10)
    timer.background(function () {
        story.spriteMoveToLocation(Text_Back, 78, 20, 10)
    })
    timer.after(750, function () {
        story.spriteMoveToLocation(Text_Front, 80, 25, 75)
        timer.background(function () {
            story.spriteMoveToLocation(Text_Back, 80, 25, 85)
        })
        timer.after(10, function () {
            Text_Back.destroy(effects.ashes, 200)
            timer.background(function () {
                Text_Front.destroy(effects.ashes, 200)
            })
        })
        timer.after(1000, function () {
            timer.background(function () {
                textSprite.destroy(effects.ashes, 200)
            })
        })
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    statusbar.value += 25
    Gold_Apple.destroy()
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "How to play") {
        game.setDialogFrame(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbcccbbbbbbbbbbbbbcccbbbbbbbbbbbbbcccbbbbbbbbb
            bbcccccccbbbccccbbcccccccbbbccccbbcccccccbbbcccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccffffccccccccccccccccccccccccccccccccccccccccb
            bcc11ffccccccccccccccccccccccccccccccccccccccccb
            bc1181fccccccccccccccccccccccccccccccccccccccccb
            421111fccccccccccccccccccccccccccccccccccccccccb
            b4211ccccccccccccccccccccccccccccccccccccccccccb
            4c42cccccccccccccccccccccccccccccccccccccccccccb
            b4bb4bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
        game.showLongText("Move with WASD or the ARROW KEYS.", DialogLayout.Center)
    } else if (option == "Play") {
        color.FadeToBlack.startScreenEffect(200)
        timer.after(1000, function () {
            blockMenu.setControlsEnabled(false)
            blockMenu.closeMenu()
            scene.setBackgroundColor(0)
            tiles.setTilemap(tilemap`Primera parte`)
            David = sprites.create(assets.image`Alien con brazos`, SpriteKind.Player)
            David.setPosition(139, 8)
            statusbar = statusbars.create(20, 4, StatusBarKind.Health)
            statusbar.value = 100
            controller.moveSprite(David)
            Creatingenemies()
            Gold_Apple = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . . 6 7 . . . . . . . . . . . . 
                . . . 6 7 . 5 5 5 5 . . . . . . 
                . . . . 6 7 5 4 5 5 5 5 . . . . 
                . . . 5 5 6 7 f 5 5 5 5 5 . . . 
                . . 5 5 4 f f 5 4 5 5 5 4 5 . . 
                . . 5 5 5 5 4 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 4 5 . . 
                . . 4 5 5 5 5 5 5 5 5 4 4 2 . . 
                . . 4 5 5 5 5 5 5 5 5 4 5 4 . . 
                . . . 4 5 5 5 5 4 5 4 4 2 . . . 
                . . . . 4 4 5 4 5 4 5 4 . . . . 
                . . . . . . 4 5 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            Gold_Apple.x = 200
            Gold_Apple.y = 500
            Gold_Apple_2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . . 6 7 . . . . . . . . . . . . 
                . . . 6 7 . 5 5 5 5 . . . . . . 
                . . . . 6 7 5 4 5 5 5 5 . . . . 
                . . . 5 5 6 7 f 5 5 5 5 5 . . . 
                . . 5 5 4 f f 5 4 5 5 5 4 5 . . 
                . . 5 5 5 5 4 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 4 5 . . 
                . . 4 5 5 5 5 5 5 5 5 4 4 2 . . 
                . . 4 5 5 5 5 5 5 5 5 4 5 4 . . 
                . . . 4 5 5 5 5 4 5 4 4 2 . . . 
                . . . . 4 4 5 4 5 4 5 4 . . . . 
                . . . . . . 4 5 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            Gold_Apple_2.x = 680
            Gold_Apple_2.y = 530
            GoldApple3 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . . 6 7 . . . . . . . . . . . . 
                . . . 6 7 . 5 5 5 5 . . . . . . 
                . . . . 6 7 5 4 5 5 5 5 . . . . 
                . . . 5 5 6 7 f 5 5 5 5 5 . . . 
                . . 5 5 4 f f 5 4 5 5 5 4 5 . . 
                . . 5 5 5 5 4 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 4 5 . . 
                . . 4 5 5 5 5 5 5 5 5 4 4 2 . . 
                . . 4 5 5 5 5 5 5 5 5 4 5 4 . . 
                . . . 4 5 5 5 5 4 5 4 4 2 . . . 
                . . . . 4 4 5 4 5 4 5 4 . . . . 
                . . . . . . 4 5 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            GoldApple3.x = 980
            GoldApple3.y = 280
            Gold_Apple_4 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . . 6 7 . . . . . . . . . . . . 
                . . . 6 7 . 5 5 5 5 . . . . . . 
                . . . . 6 7 5 4 5 5 5 5 . . . . 
                . . . 5 5 6 7 f 5 5 5 5 5 . . . 
                . . 5 5 4 f f 5 4 5 5 5 4 5 . . 
                . . 5 5 5 5 4 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 4 5 . . 
                . . 4 5 5 5 5 5 5 5 5 4 4 2 . . 
                . . 4 5 5 5 5 5 5 5 5 4 5 4 . . 
                . . . 4 5 5 5 5 4 5 4 4 2 . . . 
                . . . . 4 4 5 4 5 4 5 4 . . . . 
                . . . . . . 4 5 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            Gold_Apple_4.x = 1060
            Gold_Apple_4.y = 700
            Gold_Apple_5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . . 6 7 . . . . . . . . . . . . 
                . . . 6 7 . 5 5 5 5 . . . . . . 
                . . . . 6 7 5 4 5 5 5 5 . . . . 
                . . . 5 5 6 7 f 5 5 5 5 5 . . . 
                . . 5 5 4 f f 5 4 5 5 5 4 5 . . 
                . . 5 5 5 5 4 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 4 5 . . 
                . . 4 5 5 5 5 5 5 5 5 4 4 2 . . 
                . . 4 5 5 5 5 5 5 5 5 4 5 4 . . 
                . . . 4 5 5 5 5 4 5 4 4 2 . . . 
                . . . . 4 4 5 4 5 4 5 4 . . . . 
                . . . . . . 4 5 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            Gold_Apple_5.x = 755
            Gold_Apple_5.y = 880
            Gold_Apple_6 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . . 6 7 . . . . . . . . . . . . 
                . . . 6 7 . 5 5 5 5 . . . . . . 
                . . . . 6 7 5 4 5 5 5 5 . . . . 
                . . . 5 5 6 7 f 5 5 5 5 5 . . . 
                . . 5 5 4 f f 5 4 5 5 5 4 5 . . 
                . . 5 5 5 5 4 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 4 5 . . 
                . . 4 5 5 5 5 5 5 5 5 4 4 2 . . 
                . . 4 5 5 5 5 5 5 5 5 4 5 4 . . 
                . . . 4 5 5 5 5 4 5 4 4 2 . . . 
                . . . . 4 4 5 4 5 4 5 4 . . . . 
                . . . . . . 4 5 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            Gold_Apple_6.x = 820
            Gold_Apple_6.y = 1020
            Gold_Apple_7 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . 7 . . . . . . . . . . . . . 
                . . 6 7 . . . . . . . . . . . . 
                . . . 6 7 . 5 5 5 5 . . . . . . 
                . . . . 6 7 5 4 5 5 5 5 . . . . 
                . . . 5 5 6 7 f 5 5 5 5 5 . . . 
                . . 5 5 4 f f 5 4 5 5 5 4 5 . . 
                . . 5 5 5 5 4 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 4 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 4 5 . . 
                . . 4 5 5 5 5 5 5 5 5 4 4 2 . . 
                . . 4 5 5 5 5 5 5 5 5 4 5 4 . . 
                . . . 4 5 5 5 5 4 5 4 4 2 . . . 
                . . . . 4 4 5 4 5 4 5 4 . . . . 
                . . . . . . 4 5 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            Gold_Apple_7.x = 200
            Gold_Apple_7.y = 1080
            scene.cameraFollowSprite(David)
            color.clearFadeEffect()
        })
    } else if (option == "About") {
        game.setDialogFrame(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbcccbbbbbbbbbbbbbcccbbbbbbbbbbbbbcccbbbbbbbbb
            bbcccccccbbbccccbbcccccccbbbccccbbcccccccbbbcccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccccccccccccccccccccccccccccccccccccccccccccccb
            bccffffccccccccccccccccccccccccccccccccccccccccb
            bcc11ffccccccccccccccccccccccccccccccccccccccccb
            bc1181fccccccccccccccccccccccccccccccccccccccccb
            421111fccccccccccccccccccccccccccccccccccccccccb
            b4211ccccccccccccccccccccccccccccccccccccccccccb
            4c42cccccccccccccccccccccccccccccccccccccccccccb
            b4bb4bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
        game.showLongText("You are playing as David the alien. An alien that has come back to his home planet after a long time, only to find it completely empty of life. This is a journy into the thoughts of David while he tries to figure out what happen to himself and the life of his planet.", DialogLayout.Center)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -10
})
let Gold_Apple_7: Sprite = null
let Gold_Apple_6: Sprite = null
let Gold_Apple_5: Sprite = null
let Gold_Apple_4: Sprite = null
let GoldApple3: Sprite = null
let Gold_Apple_2: Sprite = null
let David: Sprite = null
let Gold_Apple: Sprite = null
let statusbar: StatusBarSprite = null
let Text_Back: TextSprite = null
let Text_Front: TextSprite = null
let textSprite: TextSprite = null
let Enemy_44: Sprite = null
let Enemy_43: Sprite = null
let Enemy_42: Sprite = null
let Enemy_41: Sprite = null
let Enemy_34: Sprite = null
let Enemy_33: Sprite = null
let Enemy_32: Sprite = null
let Enemy_31: Sprite = null
let Enemy_24: Sprite = null
let Enemy_23: Sprite = null
let Enemy_22: Sprite = null
let Enemy_21: Sprite = null
let Enemy_14: Sprite = null
let Enemy_13: Sprite = null
let Enemy_12: Sprite = null
let Enemy_1: Sprite = null
Starting()
