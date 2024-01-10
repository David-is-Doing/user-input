namespace SpriteKind {
    export const Null = SpriteKind.create()
}
function wrong () {
    while (blinkStage < 7) {
        leftEye.setImage(blinkCycle[blinkStage])
        rightEye.setImage(blinkCycle[blinkStage])
        pause(30)
        blinkStage += 1
    }
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 550, 1, 255, 0, 3000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    leftEye.setVelocity(10, 0)
    rightEye.setVelocity(10, 0)
    pause(150)
    for (let index = 0; index < 5; index++) {
        leftEye.setVelocity(-10, 0)
        rightEye.setVelocity(-10, 0)
        pause(300)
        leftEye.setVelocity(10, 0)
        rightEye.setVelocity(10, 0)
        pause(300)
    }
    leftEye.setVelocity(-10, 0)
    rightEye.setVelocity(-10, 0)
    pause(150)
    leftEye.setVelocity(0, 0)
    rightEye.setVelocity(0, 0)
    leftEye.setPosition(85, 58)
    rightEye.setPosition(75, 58)
    while (blinkStage > -1) {
        leftEye.setImage(blinkCycle[blinkStage])
        rightEye.setImage(blinkCycle[blinkStage])
        pause(30)
        blinkStage += -1
    }
    leftEye.setImage(assets.image`worriedEye`)
    rightEye.setImage(assets.image`fierceEye`)
    blinkStage += 2
    mySprite.sayText("No!", 1000, false)
    pause(1000)
}
function iAmBorn () {
    mySprite = sprites.create(assets.image`davidIslandBall`, SpriteKind.Player)
    mySprite.setPosition(80, 60)
    leftEye = sprites.create(assets.image`eye`, SpriteKind.Player)
    leftEye.setPosition(85, 58)
    rightEye = sprites.create(assets.image`eye`, SpriteKind.Player)
    rightEye.setPosition(75, 58)
}
function correct () {
    yourScore[myCounter.count] = yourScore[myCounter.count] + 1
    while (blinkStage < 7) {
        leftEye.setImage(blinkCycle[blinkStage])
        rightEye.setImage(blinkCycle[blinkStage])
        pause(30)
        blinkStage += 1
    }
    leftEye.setVelocity(0, 10)
    rightEye.setVelocity(0, 10)
    music.play(music.createSoundEffect(WaveShape.Square, 500, 500, 255, 255, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    leftEye.setVelocity(0, -10)
    rightEye.setVelocity(0, -10)
    music.play(music.createSoundEffect(WaveShape.Square, 675, 675, 255, 255, 300, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    leftEye.setVelocity(0, 0)
    rightEye.setVelocity(0, 0)
    leftEye.setPosition(85, 58)
    rightEye.setPosition(75, 58)
    while (blinkStage > -1) {
        leftEye.setImage(blinkCycle[blinkStage])
        rightEye.setImage(blinkCycle[blinkStage])
        pause(30)
        blinkStage += -1
    }
    leftEye.setImage(assets.image`happyEye`)
    rightEye.setImage(assets.image`happyEye`)
    blinkStage += 2
    mySprite.sayText("Yeah right!", 2000, false)
    pause(2000)
}
function blink () {
    while (blinkStage < 7) {
        leftEye.setImage(blinkCycle[blinkStage])
        rightEye.setImage(blinkCycle[blinkStage])
        pause(30)
        blinkStage += 1
    }
    blinkStage += -2
    while (blinkStage > -1) {
        leftEye.setImage(blinkCycle[blinkStage])
        rightEye.setImage(blinkCycle[blinkStage])
        pause(30)
        blinkStage += -1
    }
    blinkStage += 2
}
function pressPlay () {
    arrow.setImage(assets.image`arrow`)
    pauseUntil(() => controller.anyButton.isPressed())
    arrow.setImage(assets.image`blank`)
}
function question () {
    mySprite.sayText(questionsList[myCounter.count - 1], 5000, true)
    pause(5000)
    answerA = textsprite.create(answersList[4 * (myCounter.count - 1)])
    answerA.setMaxFontHeight(8)
    answerA.setPosition(80, 16)
    answerB = textsprite.create(answersList[4 * (myCounter.count - 1) + 1])
    answerB.setMaxFontHeight(8)
    answerB.setPosition(80, 25)
    answerC = textsprite.create(answersList[4 * (myCounter.count - 1) + 2])
    answerC.setMaxFontHeight(8)
    answerC.setPosition(80, 34)
    answerD = textsprite.create(answersList[4 * (myCounter.count - 1) + 3])
    answerD.setMaxFontHeight(8)
    answerD.setPosition(80, 43)
    pauseUntil(() => controller.anyButton.isPressed())
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    if (myCounter.count == 1) {
        if (controller.right.isPressed()) {
            correct()
            mySprite.sayText("We watched the world wake up from history.", 5000, true)
            pause(5000)
        } else {
            wrong()
            mySprite.sayText("The Soviet Union didn't even exist at that time!", 5000, true)
            pause(5000)
        }
    } else if (myCounter.count == 2) {
        if (controller.up.isPressed()) {
            correct()
            mySprite.sayText("It's only grown sevenfold since then.", 5000, true)
            pause(5000)
        } else {
            wrong()
            mySprite.sayText("The U.S. was actually doing good in 2000!", 5000, true)
            pause(5000)
        }
    } else if (myCounter.count == 3) {
        if (controller.right.isPressed()) {
            correct()
        } else {
            wrong()
        }
        mySprite.sayText("This is why you don't do drugs.", 5000, true)
        pause(5000)
    } else if (myCounter.count == 4) {
        if (controller.up.isPressed()) {
            correct()
            mySprite.sayText("Fun Fact: Guam is the westernmost part of the United States.", 5000, true)
            pause(5000)
        } else {
            wrong()
            mySprite.sayText("It's just an island!", 5000, true)
            pause(5000)
        }
    } else if (myCounter.count == 5) {
        if (controller.down.isPressed()) {
            correct()
            mySprite.sayText("Don't forget to thank your history teacher!", 5000, true)
            pause(5000)
        } else {
            wrong()
            leftEye.setImage(assets.image`fedUpEye`)
            rightEye.setImage(assets.image`fedUpEye`)
            mySprite.sayText("Typical gringo.", 5000, false)
            pause(5000)
        }
    } else if (myCounter.count == 6) {
        if (controller.down.isPressed()) {
            correct()
            mySprite.sayText("You sure do know your colors.", 5000, false)
            pause(5000)
        } else {
            wrong()
            mySprite.sayText("You're colorblind now!", 5000, true)
            pause(5000)
        }
    } else if (myCounter.count == 7) {
        if (controller.up.isPressed()) {
            correct()
            wink(rightEye)
            rightEye.setImage(assets.image`happyEye`)
            mySprite.sayText("You sure do know your trivia.", 5000, true)
            pause(5000)
        } else {
            wrong()
            mySprite.sayText("I cannot blame you, however.", 5000, true)
            pause(5000)
        }
    } else if (myCounter.count == 8) {
        if (controller.left.isPressed()) {
            correct()
            mySprite.sayText("Balls.", 1000, true)
            pause(3000)
        } else {
            wrong()
            mySprite.sayText("0 rizz!", 1000, true)
            pause(3000)
        }
    } else if (myCounter.count == 9) {
        if (controller.down.isPressed()) {
            correct()
            mySprite.sayText("Thank you for serving our country.", 5000, true)
            pause(5000)
        } else {
            wrong()
            mySprite.sayText("You got confused with soccer!", 5000, true)
            pause(5000)
        }
    } else if (myCounter.count == 10) {
        if (controller.right.isPressed()) {
            correct()
            mySprite.sayText("Check out *833# if you can.", 5000, true)
            pause(5000)
        } else {
            wrong()
            mySprite.sayText("You ain't B'i'ish!", 5000, true)
            pause(5000)
        }
    } else if (myCounter.count == 11) {
        if (controller.down.isPressed()) {
            correct()
            mySprite.sayText("You're probably a little kid.", 5000, true)
            pause(5000)
        } else {
            wrong()
            mySprite.sayText("Well, at least you're sane!", 5000, true)
            pause(5000)
        }
    } else if (myCounter.count == 12) {
        if (controller.right.isPressed()) {
            correct()
            mySprite.sayText("Technically, he's from the left.", 5000, true)
            pause(5000)
        } else {
            wrong()
            mySprite.sayText("At least he's dead now.", 5000, true)
            pause(5000)
        }
        mySprite.sayText("Source: Cleveland Brown", 5000, true)
        pause(5000)
    } else if (myCounter.count == 13) {
        if (controller.left.isPressed()) {
            correct()
            mySprite.sayText("That's cash money for our schools!", 5000, true)
            pause(5000)
        } else {
            wrong()
            mySprite.sayText("Do we look like a charter school to you?", 5000, true)
            pause(5000)
        }
    } else if (myCounter.count == 14) {
        if (controller.up.isPressed()) {
            correct()
            mySprite.sayText("They are in Paris, after all.", 5000, true)
            pause(5000)
        } else {
            wrong()
            mySprite.sayText("Don't confuse the waterless people!", 5000, true)
            pause(5000)
        }
    } else if (myCounter.count == 15) {
        if (controller.left.isPressed()) {
            correct()
            mySprite.sayText(":)", 1000, true)
            pause(1000)
        } else {
            wrong()
            mySprite.sayText(":(", 1000, true)
            pause(1000)
        }
    } else if (myCounter.count == 16) {
        if (controller.left.isPressed()) {
            correct()
        } else {
            wrong()
        }
    }
    if (myCounter.count < questionsList.length) {
        mySprite.sayText("Very well then. Let's move onto the next question.", 5000, true)
        pause(5000)
        pressPlay()
    }
}
function wink (eyeSprite: Sprite) {
    while (blinkStage < 7) {
        eyeSprite.setImage(blinkCycle[blinkStage])
        pause(30)
        blinkStage += 1
    }
    while (blinkStage > -1) {
        eyeSprite.setImage(blinkCycle[blinkStage])
        pause(30)
        blinkStage += -1
    }
    blinkStage += 2
}
function playTheme () {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("G C A D G C A D ", 400), music.PlaybackMode.UntilDone)
    }
    for (let index = 0; index < 2; index++) {
        music.play(music.stringPlayable("A D B E A D B E ", 400), music.PlaybackMode.UntilDone)
    }
    music.play(music.stringPlayable("C5 C5 - B G - C C ", 100), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G C A D G C C5 - ", 410), music.PlaybackMode.UntilDone)
}
let answerD: TextSprite = null
let answerC: TextSprite = null
let answerB: TextSprite = null
let answerA: TextSprite = null
let sum = 0
let myCounter: DigitCounter = null
let cross: Sprite = null
let mySprite: Sprite = null
let rightEye: Sprite = null
let leftEye: Sprite = null
let yourScore: number[] = []
let questionsList: string[] = []
let blinkStage = 0
let blinkCycle: Image[] = []
let arrow: Sprite = null
let answersList: string[] = []
scene.setBackgroundColor(15)
answersList = [
"A. 1776",
"B. 1845",
"C. 1991",
"D. 2007",
"A. $5.65 trillion",
"B. $33.65 trillion",
"C. $69,420.69",
"D. $900 million",
"A. Lower sperm count",
"B. Amotivational syndrome",
"C. Alleviate depression",
"D. Impaired memory",
"A. In the Pacific Ocean",
"B. Next to Germany",
"C. ur mum",
"D. Inside Libya",
"A. The Han",
"B. Zhuang people",
"C. China Joe",
"D. The Manchus",
"A. Mahogany",
"B. Heliotrope",
"C. Blurple",
"D. Lilac",
"A. Skyla",
"B. Elesa",
"C. Cynthia",
"D. Rosa",
"A. Marco Gottlieb",
"B. Nicholas Jessie",
"C. Pierce Madden",
"D. Otto Darnell",
"A. 1",
"B. 2",
"C. 5",
"D. 6",
"A. 1st November 1997",
"B. 7th January 1993",
"C. 24th September 1988",
"D. 12th December 1986",
"A. meme",
"B. skibidi",
"C. gyatt",
"D. lit",
"A. Here",
"B. In a statue",
"C. In a college dorm",
"D. Where East Germany was",
"A. DELICIOUS!",
"B. Chernobyl",
"C. I didn't eat it.",
"D. Give me boner",
"A. Niger",
"B. Tanzania",
"C. Angola",
"D. Egypt",
"A. 1914-1991",
"B. 1789-1914",
"C. 1688-1815",
"D. 1589-1715",
"A. Amnon",
"B. Solomon",
"C. Tamar",
"D. Nathan"
]
arrow = sprites.create(assets.image`blank`, SpriteKind.Projectile)
arrow.setPosition(150, 115)
blinkCycle = [
assets.image`eye`,
assets.image`heavyEye`,
assets.image`fedUpEye`,
assets.image`tiredEye`,
assets.image`squintingEye`,
assets.image`closedEye`,
assets.image`squeezedEye`
]
blinkStage = 1
iAmBorn()
let podium = sprites.create(assets.image`stand`, SpriteKind.Null)
podium.setPosition(80, 94)
questionsList = [
"When did the USSR fall?",
"In 2000, what was the U.S. national debt?",
"What is not an effect of marijuana use?",
"Where is Guam?",
"Who ruled the Great Qing?",
"What color is #c8a2c8?",
"What is the name of the Gym Leader in Mistralton City?",
"Who invented Rizzics?",
"How many points is a touchdown worth?",
"When did CCl4 come online?",
"Which slang term came from the 2010s?",
"Where would you most likely find Che Guevara?",
"How was today's lunch?",
"What did France colonize in 1898?",
"When was the long nineteenth century?",
"Which one of my sons got super laid?"
]
let titleCard = sprites.create(assets.image`bigTitle`, SpriteKind.Null)
yourScore = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
pauseUntil(() => controller.anyButton.isPressed())
if (controller.A.isPressed()) {
    titleCard.setVelocity(0, 10)
    playTheme()
    yourScore[0] = yourScore[0] + 1
}
animation.runImageAnimation(
titleCard,
assets.animation`showTitle`,
100,
true
)
titleCard.setVelocity(0, 0)
titleCard.setPosition(130, 130)
pause(500)
blink()
pause(750)
blink()
pause(2000)
leftEye.setImage(assets.image`happyEye`)
rightEye.setImage(assets.image`happyEye`)
music.play(music.createSong(assets.song`backgroundMusic`), music.PlaybackMode.LoopingInBackground)
mySprite.sayText("Hello! Welcome to User Input!", 5000, true)
pause(5000)
mySprite.sayText("I'm your host, David, and I will be waiting for your...", 5000, true)
pause(5000)
mySprite.sayText("User...", 1000, false)
pause(1000)
mySprite.sayText("INPUT!!!", 4000, true)
blink()
music.stopAllSounds()
for (let index = 0; index < 16; index++) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    pause(125)
}
pressPlay()
if (controller.A.isPressed()) {
    leftEye.setImage(assets.image`happyEye`)
    rightEye.setImage(assets.image`happyEye`)
    yourScore[0] = yourScore[0] + 1
    music.play(music.createSong(assets.song`backgroundMusic`), music.PlaybackMode.LoopingInBackground)
    mySprite.sayText("Before we begin, let's set the rules of the game.", 5000, true)
    pause(5000)
    mySprite.sayText("A counter will appear telling you what question we're on.", 5000, true)
    pause(5000)
    mySprite.sayText("These are the controls.", 1500, true)
    cross = sprites.create(assets.image`directions`, SpriteKind.Null)
    cross.setPosition(80, 16)
    pause(9000)
    sprites.destroy(cross)
    mySprite.sayText("It's your job to get the best score ever!", 3000, true)
    pause(3000)
}
myCounter = sevenseg.createCounter(SegmentStyle.Narrow, SegmentScale.Half, 2)
myCounter.setDigitColor(8)
myCounter.x = 11
myCounter.y = 9
mySprite.sayText("With that out of the way...", 2000, true)
pause(2000)
mySprite.sayText("Let's play!", 4000, true)
music.stopAllSounds()
music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
pause(4000)
mySprite.sayText("Let's start with the first question.", 4000, false)
blink()
pause(4000)
for (let index = 0; index < 16; index++) {
    myCounter.count += 1
    question()
    blink()
}
music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
myCounter.count = 0
sprites.destroyAllSpritesOfKind(SpriteKind.Text, effects.confetti, 3000)
mySprite.sayText("I will now evaluate your results.", 4000, true)
pause(4000)
if (yourScore[0] == 0) {
    music.stopAllSounds()
    music.play(music.createSoundEffect(WaveShape.Noise, 3400, 3100, 255, 0, 160, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    mySprite.changeScale(-0.125, ScaleAnchor.Bottom)
    leftEye.changeScale(-0.125, ScaleAnchor.Bottom)
    leftEye.setVelocity(-1, 1)
    rightEye.changeScale(-0.125, ScaleAnchor.Bottom)
    rightEye.setVelocity(1, 1)
    pause(875)
    mySprite.sayText("What?", 1000, true)
    pause(1000)
    mySprite.changeScale(-0.125, ScaleAnchor.Bottom)
    leftEye.changeScale(-0.125, ScaleAnchor.Bottom)
    rightEye.changeScale(-0.125, ScaleAnchor.Bottom)
    pause(875)
    mySprite.sayText("NOOOO!", 5000, true)
    for (let index = 0; index < 6; index++) {
        mySprite.changeScale(-0.125, ScaleAnchor.Bottom)
        leftEye.changeScale(-0.125, ScaleAnchor.Bottom)
        rightEye.changeScale(-0.125, ScaleAnchor.Bottom)
        pause(875)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.halo, 5000)
    game.splash("Never skip the start.")
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER")
    game.setGameOverEffect(false, effects.melt)
} else if (yourScore[0] == 1) {
    music.stopAllSounds()
    leftEye.setImage(assets.image`fedUpEye`)
    rightEye.setImage(assets.image`fedUpEye`)
    mySprite.sayText("You've played this game before, haven't you?", 5000, true)
    pause(5000)
} else {
    wink(leftEye)
    leftEye.setImage(assets.image`happyEye`)
    rightEye.setImage(assets.image`happyEye`)
}
playTheme()
for (let value of yourScore) {
    sum += value
}
myCounter.count = sum
mySprite.sayText("18 is the best score you can get,", 3000, true)
pause(3000)
leftEye.setImage(assets.image`happyEye`)
rightEye.setImage(assets.image`happyEye`)
mySprite.sayText("so compare!", 2000, true)
pause(2000)
pressPlay()
mySprite.sayText("Thank you very much for inserting your User Input.", 5000, true)
pause(5000)
mySprite.sayText("See you next time!", 2000, false)
pause(2000)
music.play(music.stringPlayable("G C A D G C C5 - ", 410), music.PlaybackMode.UntilDone)
sprites.destroyAllSpritesOfKind(SpriteKind.Player)
sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
sprites.destroyAllSpritesOfKind(SpriteKind.Null)
scene.setBackgroundImage(assets.image`blank`)
pauseUntil(() => controller.anyButton.isPressed())
game.gameOver(true)
game.setGameOverMessage(true, "GAME OVER")
game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
forever(function () {
    arrow.setVelocity(0, -3)
    pause(1000)
    arrow.setVelocity(0, 3)
    pause(1000)
})
