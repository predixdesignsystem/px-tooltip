// This is the wrapper for custom tests, called upon web components ready state
var getStyle = function (el, style){
  return window.getComputedStyle( el, null ).getPropertyValue( style );
};
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-dropdown', function() {
    var px_tooltip = Polymer.dom(document).querySelector('#px_tooltip_1')
        wrapper = px_tooltip.$$('#tooltipWrapper');

  test('hides tooltip before click', function() {
    expect(wrapper.classList.contains('hidden')).to.equal(true);
  });

  test('reflects the "for" property', function() {
     assert.equal(px_tooltip.for, "hoverDivTop");
  });

  test('reflects the "delay" property', function() {
     assert.equal(px_tooltip.delay, 5000);
  });

  test('reflects the "orientation" property', function() {
     assert.equal(px_tooltip.orientation, "top");
  });

  test('reflects the "tooltip-message" property', function() {
     assert.equal(px_tooltip.tooltipMessage, "Top tooltip");
  });

   suite('when tooltip is shown', function() {

     setup('when _show called', function(done) {
         px_tooltip._show();
         setTimeout(function() {
             expect(wrapper.classList.contains('hidden')).to.equal(false);
             done();
         }, 3000); // delay is 500 ms
     });
   });
  });
}
