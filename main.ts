mp.onControllerEvent(ControllerEvent.Disconnected, function (player2) {
    game.setGameOverMessage(true, "GAME OVER!")
})
mp.onControllerEvent(ControllerEvent.Connected, function (player2) {
    game.splash("Welcome!")
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Juan`, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Jezreel`, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
tiles.setCurrentTilemap(tilemap`level1`)
forever(function () {
    music.play(music.createSong(hex`0078000408020900001c00010a006400f4016400000400000000000000000000000000050000040e0024002800031d202728002c00012402001c000c960064006d019001000478002c010000640032000000000a0600051e0010001400011118001c00011624002800010a2c003000010f34003800011403001c0001dc00690000045e01000400000000000000000000056400010400030d001000140002080a18001c00010f04001c00100500640000041e000004000000000000000000000000000a04000414000400080002202a08000c000224290c001000012005001c000f0a006400f4010a000004000000000000000000000000000000000251000000040002242a0400080002141d08000c0002111b0c001000020a2410001400012514001800020a2018001c00030d11291c0020000214202000240002062224002800010d28002c00010d2c003000011406001c00010a006400f401640000040000000000000000000000000000000002140018001c00021b2428002c00011b2c00300002272a07001c00020a006400f401640000040000000000000000000000000000000003140008000c00012c0c0010000125100014000324292a08001c000e050046006603320000040a002d00000064001400013200020100020d001000140002202714001800012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001f000c000d0001021400150001021800190001041c001d00010a2000210002070a`), music.PlaybackMode.UntilDone)
})
