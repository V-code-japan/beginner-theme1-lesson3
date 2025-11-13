# LESSON1 家を作ってみよう
```block
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

```template
player.onChat("run", function () {
	
})
```

## 0.空間座標を使ってプログラミングしてみよう @unplugged
<p>プログラミングで四角い家を作るプログラムを作ろう！</p>
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/complete1.png">

## 目標
<p>まずはこれから作るものの形を確認しよう！</p>
<p>・チャットで「run」と入力したら、四角い家を作るようにプログラミングをする</p>
<p>・シラカバの板材をワールド(23, 72, 117)からワールド(30, 77, 125)に中空（中が空どう）で置く</p>
<p>・オークのドアをワールド(23, 73, 121)に置く</p>
<p>・ガラスをワールド(25, 74, 117)からワールド(28, 75, 117)に置く</p>
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/complete1.png">

## 1.コードブロックを設置してみましょう

`||blocks.ブロック||`ボタンをクリックしてその中の`||blocks.ブロックを並べる～||`と書いてあるブロックを`||player.チャットコマンド～||`の中にドラックしてみましょう</br>
`||blocks.土ブロック||`をクリックして`||blocks.シラカバの板材||`に変えましょう
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/set_fill1.gif">
```block
player.onChat("run", function () {
    blocks.fill(
    PLANKS_BIRCH,
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## 2.座標を変更してみましょう

`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド0 0 0||`を`||blocks.範囲の始まり~0~0~0||`の上までドラッグします</br>
`||positions.範囲の始まり ワールド0 0 0||`を`||positions.ワールド23 72 117||`に変えましょう</br>
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/set_world_pos1.gif">
```block
player.onChat("run", function () {
    blocks.fill(
    PLANKS_BIRCH,
    world(23, 72, 117),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## 3.座標を変更してみましょう

`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド0 0 0||`を`||blocks.範囲の終わり~0~0~0||`の上までドラッグします</br>
`||positions.範囲の終わり ワールド0 0 0||`を`||positions.ワールド30 77 125||`に変えましょう</br>
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/fill_second_world_pos1.gif">
```block
player.onChat("run", function () {
    blocks.fill(
    PLANKS_BIRCH,
    world(23, 72, 117),
    world(30, 77, 125),
    FillOperation.Replace
    )
})
```

## 4.設定を変更してみましょう

`||blocks.モード 置き換え(replace)||`をクリックして`||blocks.モード 中空||`に変えましょう</br>
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/set_hollow1.gif">
```block
player.onChat("run", function () {
    blocks.fill(
    PLANKS_BIRCH,
    world(23, 72, 117),
    world(30, 77, 125),
    FillOperation.Hollow
    )
})
```

## 5.ドアをおいてみましょう

`||blocks.ブロック||`ボタンをクリックしてその中の`||blocks.ブロックを~0~0~0に置く||`と書いてあるブロックを`||player.チャットコマンド～||`の中にドラックしてみましょう</br>
`||blocks.土ブロック||`をクリックして`||blocks.オークのドア||`に変えましょう
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/set_oak_door1.gif">
```block
player.onChat("run", function () {
    blocks.fill(
    PLANKS_BIRCH,
    world(23, 72, 117),
    world(30, 77, 125),
    FillOperation.Hollow
    )
    blocks.place(OAK_DOOR, pos(0, 0, 0))
})
```

## 6.座標を変えてみましょう

`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド0 0 0||`を`||blocks.~0~0~0||`の上までドラッグします</br>
`||positions.ワールド0 0 0||`を`||positions.ワールド23 73 121||`に変えましょう</br>
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/set_oak_door_pos1.gif">
```block
player.onChat("run", function () {
    blocks.fill(
    PLANKS_BIRCH,
    world(23, 72, 117),
    world(30, 77, 125),
    FillOperation.Hollow
    )
    blocks.place(OAK_DOOR, world(23, 73, 121))
})
```

## 7.まどを作りましょう

`||blocks.ブロック||`ボタンをクリックしてその中の`||blocks.ブロックを並べる～||`と書いてあるブロックを`||player.チャットコマンド～||`の中にドラックしましょう</br>
`||blocks.土ブロック||`をクリックして`||blocks.ガラス||`に変えましょう</br>
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/fill_glass1.gif">
```block
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
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
```

## 8.座標を変えてみましょう

`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド0 0 0||`をドラックして`||blocks.範囲の始まり~0~0~0||`の上までドラッグします</br>
`||positions.範囲の始まり ワールド0 0 0||`を`||positions.ワールド25 74 117||`に変えましょう</br></br>
`||positions.ポジション||`ボタンをクリックしてその中の`||positions.ワールド0 0 0||`をドラックして`||blocks.範囲の終わり~0~0~0||`の上までドラッグします</br>
`||positions.範囲の終わり ワールド0 0 0||`を`||positions.ワールド28 75 117||`に変えましょう</br>
<img style="display: block; margin: auto;" height="50%" width="90%" src="https://vcode-esia.com/images_for_world_data/Basic/Theme1/Lesson3/fill_glass_world_pos1.gif">
```block
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

## 9.『実行』ボタンをクリックしましょう
画面右下にある緑の『▶』ボタンをクリックして作ったプログラムを実行し、チャットコマンドで`||player.run||`と入力してみましょう