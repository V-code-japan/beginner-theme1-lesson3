# LESSON2 キッチンを作ってみよう
```block
player.onChat("run", function () {
    blocks.fill(
    BRICKS,
    world(26, 72, 125),
    world(30, 76, 131),
    FillOperation.Hollow
    )
    blocks.fill(
    GLASS,
    world(26, 74, 127),
    world(26, 75, 129),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(27, 73, 125),
    world(29, 75, 125),
    FillOperation.Replace
    )
})
```

```template
player.onChat("run", function () {
	
})
```

## 目標
<p>まずはこれから作るものの形を確認しよう！</p>
<p>・チャットで「run」と入力したら、キッチンを作るようにプログラミングをする</p>
<p>・レンガをワールド(26, 72, 125)からワールド(30, 76, 131)に中空（中が空どう）で置く</p>
<p>・ガラスをワールド(26, 74, 127)からワールド(26, 75, 129)に置く</p>
<p>・家とつながるように、空気ブロックをワールド(27, 73, 125)からワールド(29, 75, 125)に置く</p>
<p><img style="width:100%" src="https://i.ibb.co/gjcjrjZ/2024-03-15-112545.png"></p>

## 1.コードブロックを設置してみましょう

`||blocks.ブロック||`ボタンをクリックしてその中の`||blocks.ブロックを並べる～||`と書いてあるブロックを`||player.チャットコマンド～||`の中にドラックしてみましょう</br>
`||blocks.土ブロック||`をクリックして`||blocks.レンガブロック||`に変えましょう
```block
player.onChat("run", function () {
    blocks.fill(
    BRICKS,
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## 2.座標を変更してみましょう

`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド0 0 0||`を`||blocks.範囲の始まり~0~0~0||`の上までドラッグします</br>
`||positions.範囲の始まり ワールド0 0 0||`を`||positions.ワールド26 72 125||`に変えましょう</br>
```block
player.onChat("run", function () {
    blocks.fill(
    BRICKS,
    world(26, 72, 125),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## 3.座標を変更してみましょう

`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド0 0 0||`を`||blocks.範囲の終わり~0~0~0||`の上までドラッグします</br>
`||positions.範囲の終わり ワールド0 0 0||`を`||positions.ワールド30 76 131||`に変えましょう</br>
```block
player.onChat("run", function () {
    blocks.fill(
    BRICKS,
    world(26, 72, 125),
    world(30, 76, 131),
    FillOperation.Replace
    )
})
```

## 4.設定を変更してみましょう

`||blocks.モード 置き換え(replace)||`をクリックして`||blocks.モード 中空||`に変えましょう</br>
```block
player.onChat("run", function () {
    blocks.fill(
    BRICKS,
    world(26, 72, 125),
    world(30, 76, 131),
    FillOperation.Hollow
    )
})
```

## 5.まどを作りましょう

`||blocks.ブロック||`ボタンをクリックしてその中の`||blocks.ブロックを~0~0~0に並べる||`と書いてあるブロックを`||player.チャットコマンド～||`の中にドラックしましょう</br>
`||blocks.土ブロック||`をクリックして`||blocks.ガラス||`に変えましょう</br>
```block
player.onChat("run", function () {
    blocks.fill(
    BRICKS,
    world(26, 72, 125),
    world(30, 76, 131),
    FillOperation.Hollow
    )
    blocks.fill(
    GLASS,
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## 6.座標を変えてみましょう

`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド0 0 0||`をドラックして`||blocks.範囲の始まり~0~0~0||`の上までドラッグします</br>
`||positions.範囲の始まり ワールド0 0 0||`を`||positions.ワールド26 74 127||`に変えましょう</br></br>
`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド0 0 0||`をドラックして`||blocks.範囲の終わり~0~0~0||`の上までドラッグします</br>
`||positions.範囲の終わり ワールド0 0 0||`を`||positions.ワールド26 75 129||`に変えましょう</br>
```block
player.onChat("run", function () {
    blocks.fill(
    BRICKS,
    world(26, 72, 125),
    world(30, 76, 131),
    FillOperation.Hollow
    )
    blocks.fill(
    GLASS,
    world(26, 74, 127),
    world(26, 75, 129),
    FillOperation.Replace
    )
})
```

## 7.穴をあけて家とつなげましょう

`||blocks.ブロック||`ボタンをクリックしてその中の`||blocks.ブロックを~0~0~0に並べる||`と書いてあるブロックを`||player.チャットコマンド～||`の中にドラックしましょう</br>
`||blocks.土ブロック||`をクリックして`||blocks.空気||`に変えましょう</br>
```block
player.onChat("run", function () {
    blocks.fill(
    BRICKS,
    world(26, 72, 125),
    world(30, 76, 131),
    FillOperation.Hollow
    )
    blocks.fill(
    GLASS,
    world(26, 74, 127),
    world(26, 75, 129),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## 8.座標を変えてみましょう

`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド0 0 0||`をドラックして`||blocks.範囲の始まり~0~0~0||`の上までドラッグします</br>
`||positions.範囲の始まり ワールド0 0 0||`を`||positions.ワールド27 73 125||`に変えましょう</br></br>
`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド0 0 0||`をドラックして`||blocks.範囲の終わり~0~0~0||`の上までドラッグします</br>
`||positions.範囲の終わり ワールド0 0 0||`を`||positions.ワールド29 75 125||`に変えましょう</br>
```block
player.onChat("run", function () {
    blocks.fill(
    BRICKS,
    world(26, 72, 125),
    world(30, 76, 131),
    FillOperation.Hollow
    )
    blocks.fill(
    GLASS,
    world(26, 74, 127),
    world(26, 75, 129),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(27, 73, 125),
    world(29, 75, 125),
    FillOperation.Replace
    )
})
```

## 9.『実行』ボタンをクリックしましょう
画面右下にある緑の『▶』ボタンをクリックして作ったプログラムを実行し、チャットコマンドで`||player.run||`と入力してみましょう