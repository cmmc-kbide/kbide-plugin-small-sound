Blockly.Blocks['small_sound_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SMALL SOUND");
    this.appendValueInput("SMALL_SOUND_ANALOG_PIN")
        .setCheck("Number")
        .appendField("ANALOG PIN");
    this.appendValueInput("SMALL_SOUND_DIGITAL_PIN")
        .setCheck("Number")
        .appendField("DIGITAL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};