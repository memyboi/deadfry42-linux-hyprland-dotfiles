export const ArchIcon = () => {
    return Widget.EventBox({
        on_primary_click: () => {},
        child: Widget.Label({
            class_names: ["arch-flex", "alonebox"],
            label: "\udb82\udcc7",
            width_request: 37,
        })
    })
}