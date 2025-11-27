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