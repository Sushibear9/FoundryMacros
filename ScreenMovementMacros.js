// SetNewLocation
await game.settings.register('positionSetter', 'startingPosition', {
  name: 'startingPosition', // can also be an i18n key
  hint: 'A description of the registered setting and its behavior.', // can also be an i18n key
  scope: 'client',     // "world" = sync to db, "client" = local storage
  config: true,       // false if you dont want it to show in module config
  type: Object,       // Number, Boolean, String, or even a custom class or DataModel
  onChange: value => { // value is the new value of the setting
    console.log(value)
  },
  filePicker: false,  // set true with a String `type` to use a file picker input,
  requiresReload: false, // when changing the setting, prompt the user to reload
})

ui.notifications.info("Position Saved");
game.settings.set('positionSetter', 'startingPosition', {x: canvas.stage.pivot.x, y: canvas.stage.pivot.y, s: canvas.stage.scale.x})



// PanToStartingPosition
let coords = game.settings.get('positionSetter', 'startingPosition')
ui.notifications.info("Moving To Saved Position");
canvas.animatePan({x: coords.x, y: coords.y, scale: coords.s, speed: 2000})



//SetTo1in
let gridSize = canvas.grid.size
let targetScale = 1.09 / (gridSize/100)
canvas.animatePan({x: canvas.stage.pivot.x, y: canvas.stage.pivot.y, scale: targetScale })



//SetTo0.5in
let gridSize = canvas.grid.size
let targetScale = 1.09 / (gridSize/50)
canvas.animatePan({x: canvas.stage.pivot.x, y: canvas.stage.pivot.y, scale: targetScale })