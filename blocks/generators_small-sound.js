Blockly.JavaScript["small_sound_block"] = function(block) {
    var text_small_sound_analog_pin = block.getFieldValue(
      "SMALL_SOUND_ANALOG_PIN"
    );
    var variable_small_sound_analog_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("SMALL_SOUND_ANALOG_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    var text_small_sound_digital_pin = block.getFieldValue(
      "SMALL_SOUND_DIGITAL_PIN"
    );
    var variable_small_sound_digital_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("SMALL_SOUND_DIGITAL_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #VARIABLE
	int SMALL_SOUND_ANALOG_PIN = ${text_small_sound_analog_pin}; 
	int SMALL_SOUND_DIGITAL_PIN = ${text_small_sound_digital_pin}; 
  	#END

	#SETUP
	  pinMode(SMALL_SOUND_ANALOG_PIN, INPUT);
	  pinMode(SMALL_SOUND_DIGITAL_PIN, INPUT);
	#END
	    
	 
	  float ${variable_small_sound_analog_value} = analogRead (SMALL_SOUND_ANALOG_PIN);
	  int ${variable_small_sound_digital_value} = digitalRead (SMALL_SOUND_DIGITAL_PIN);
	  
	  delay (200);
	
    `;
    return code;
  };