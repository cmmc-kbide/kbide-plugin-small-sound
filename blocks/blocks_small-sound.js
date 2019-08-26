Blockly.Blocks["small_sound_block"] = {
    init: function() {
      this.appendDummyInput().appendField("SMALL SOUND");
      this.appendDummyInput()
        .appendField("ANALOG PIN")
        .appendField(new Blockly.FieldTextInput("A0"), "SMALL_SOUND_ANALOG_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("SMALL_SOUND_ANALOG_VALUE"),
          "SMALL_SOUND_ANALOG_VALUE"
        );
      this.appendDummyInput()
        .appendField("DIGITAL PIN")
        .appendField(new Blockly.FieldTextInput("0"), "SMALL_SOUND_DIGITAL_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("SMALL_SOUND_DIGITAL_VALUE"),
          "SMALL_SOUND_DIGITAL_VALUE"
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };