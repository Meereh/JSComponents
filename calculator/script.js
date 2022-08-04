(function(){
    'use strict';

    const get = (target) => {
        return document.querySelector(target)
      }
    
      const getAll = (target) => {
        return document.querySelectorAll(target)
      }

      const numberButtons = getAll('.cell_button.number')
      const operationButtons = getAll('.cell_button.operation')

      const allClearButton = get('.cell_button.all_clear')
      const clearButton = get('.cell_button.clear')
      const computeButton = get('.cell_button.compute')
      const display = get('.display')
  
      class Calculator {
        constructor(element){
            this.element = element
            this.currentValue = ''
            this.prevValue = ''
            this.operation = null
        }


      }

      const calculator = new Calculator(display);


})();