# 作った家をかざりつけよう！
```template
player.onChat("run", function () {
    blocks.fill(
    PLANKS_BIRCH,
    world(23, 72, 117),
    world(30, 77, 125),
    FillOperation.Hollow
    )
    blocks.place(OAK_DOOR, world(23, 73, 121))
    blocks.fill(
    GLASS,
    world(25, 74, 117),
    world(28, 75, 117),
    FillOperation.Replace
    )
})
```
```blocks
player.onChat("run", function () {
    blocks.fill(
    PLANKS_BIRCH,
    world(23, 72, 117),
    world(30, 77, 125),
    FillOperation.Hollow
    )
    blocks.place(OAK_DOOR, world(23, 73, 121))
    blocks.fill(
    GLASS,
    world(25, 74, 117),
    world(28, 75, 117),
    FillOperation.Replace
    )
})
```

## 作った家をかざりつけよう！
<p>今日のミッションで作った家の中や外を、**好きなブロックでかざりつけよう！**</p>
<p>・必要なアイテムやブロックは、**プログラミングでとりだそう**</p>
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/finished.png">

## 復習① プログラミングを実行する方法
<p>プログラミングを動かすには、**イベント**が必要でした。今までに学習したイベントは3つあります！</p>
<n></n>
<p>1. ``||loops.最初だけ||``: **プログラム実行ボタン（▶ボタン）をおしたとき**に、はめこんだプログラムを動かす</p>
<p>2. ``||player.チャットコマンド run を入力した時||``: プログラム実行ボタン（▶ボタン）をおしたあと、**Tをおして出てくるチャット画面で「run」と入力したとき**に、はめこんだプログラムを動かす</p>
<p>3. ``||player.次のアイテムが使われた時||``: プログラム実行ボタン（▶ボタン）をおしたあと、**指定したアイテムを手に持って右クリックで使ったとき**、はめこんだプログラムを動かす</p>
<n></n>
<p>自分のやりたいことにあわせてつかいわけましょう！</p>
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/events.png">


## 復習② ブロックやアイテムのとりだしかた
<p>ブロックやアイテムをとりだしたいときは、``||mobs.モブ||``にある、``||mobs.アイテムを与える||``をつかいます。</p>
<n></n>
<p>・対象（だれにブロックやアイテムをわたすか）を、**自分（@s）**にする</p>
<p>・アイテムをわたしたいときは、``||blocks.ブロック||``にある``||blocks.アイテム||``をとりだして、**アイテム/ブロック**の部分にはめこむ</p>
<p>・数を、ほしい数にする</p>
<n></n>
<p>ヒント（💡マークをおすとひらく）には例として、**チャットで「run」と入力したらダイヤモンドのツルハシとレンガブロックをとりだすプログラム**と、**プログラムを実行したときにプレイヤーに棒をわたして、棒を使った時にダイヤモンドのツルハシとレンガブロックをわたすプログラム**をつくっています。</p>
<p>これを参考に、好きなブロックやアイテムを取り出してみよう！</p>
```blocks
player.onChat("run", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_PICKAXE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    BRICKS,
    64
    )
})
player.onItemInteracted(STICK, function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_PICKAXE,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    BRICKS,
    64
    )
})
mobs.give(
mobs.target(LOCAL_PLAYER),
STICK,
1
)
```

## ゲームモードについて
<p>このワールドのゲームモードは**サバイバル**ですが、**クリエイティブモードと同じように空をとぶことができます！**</p>
<p>また、**好きな場所に行くことができる**ようになっています。</p>
<p>とりだしたブロックやアイテムを、好きな場所にかざりつけましょう。</p>

<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/may_fly.gif">

