import $ from 'jquery';

export default class {
  
  constructor(rootElement, eur_usd_coeff) {
    this.rootElement = rootElement;
    this.eur_usd_coeff = eur_usd_coeff;
    this.EUR = 0;
    this.USD = 0;
  }
  
  render() {
    // detach event listeners
    $('button').off('click');
    
    // define html 
    let html = '';
    html += '<table>';
    html += ' <tr>';
    html += '   <td>EUR</td>';
    html += '   <td>&nbsp;</td>';
    html += '   <td>USD</td>';
    html += ' </tr>';
    html += ' <tr>';
    html += '   <td><input id="EUR" /></td>';
    html += '   <td>';
    html += '     <button id="convertEURtoUSD">>>></button><br>';
    html += '     <button id="convertUSDtoEUR"><<<</button>';
    html += '   </td>';
    html += '   <td><input id="USD" /></td>';
    html += ' </tr>';
    html += '</table>';
    rootElement.innerHTML = html;
    
    // set field values
    $('#EUR').val(this.EUR);
    $('#USD').val(this.USD);
    
    // attach event listeners
    $('#convertEURtoUSD').on('click', function() {
      this.convertEURtoUSD() 
    });
    $('#convertUSDtoEUR').on('click', () => { 
      this.convertUSDtoEUR() 
    });
  }
  
  convertEURtoUSD() {
    this.EUR = $('#EUR').val();
    this.USD = this.EUR * this.eur_usd_coeff;
    this.render();
  }
  
  convertUSDtoEUR() {
    this.USD = $('#USD').val();
    this.EUR = this.USD / this.eur_usd_coeff;
    this.render();
  }
  
};