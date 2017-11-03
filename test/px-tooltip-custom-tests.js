// This is the wrapper for custom tests, called upon web components ready state
var getStyle = function (el, style){
  return window.getComputedStyle( el, null ).getPropertyValue( style );
};
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-tooltip', function() {
    var px_tooltip = Polymer.dom(document).querySelector('#px_tooltip_1');

  test('hides tooltip before click', function() {
    assert.isFalse(px_tooltip.visible);
  });

  test('reflects the "for" property', function() {
     assert.equal(px_tooltip.for, "hoverDivTop");
  });

  test('reflects the "delay" property', function() {
     assert.equal(px_tooltip.delay, 500);
  });

  test('reflects the "orientation" property', function() {
     assert.equal(px_tooltip.orientation, "top");
  });

  test('reflects the "tooltip-message" property', function() {
     assert.equal(px_tooltip.tooltipMessage, "Top tooltip");
  });

   suite('when tooltip is shown', function() {

     test('when _show called', function(done) {

      assert.isFalse(px_tooltip.openRequested);
      px_tooltip.set('opened', true);
      assert.isTrue(px_tooltip.openRequested);
      setTimeout(function() {
          assert.isTrue(px_tooltip.visible);
          assert.isFalse(px_tooltip.openRequested);
          done();
      }, 1000); // delay is 500 ms
     });
   });
  });

  suite('Large text string tooltip', function() {

      var px_tooltip_large = Polymer.dom(document).querySelector('#px_tooltip_9'),
          tooltip_text = px_tooltip_large.tooltipMessage,
          tooltip_classes = Polymer.dom(px_tooltip_large.root).querySelector('#tooltip.px-tooltip'),
          width_styles = getStyle(tooltip_classes, 'max-width');

      test('Check max width of tooltip', function() {
          if (tooltip_text.length > 52){
              assert.equal(width_styles, '400px');
          }
      });

  });


// Object
suite('Custom Automation Tests for px-tooltip', function() {
  var px_tooltip = Polymer.dom(document).querySelector('#px_tooltip_8');

  var target =  Polymer.dom(document).querySelector('#hoverDivTop5');

  px_tooltip_8.set('for',target);

  test('hides tooltip before click', function() {
    assert.isFalse(px_tooltip.visible);
  });

  test('"for" property is object', function() {
     assert.equal(typeof(px_tooltip.for), 'object');
  });

  test('reflects the "for" property', function() {
     assert.equal(px_tooltip.for, target);
  });

   suite('when tooltip is shown', function() {

     test('when _show called', function(done) {

         assert.isFalse(px_tooltip.openRequested);
         px_tooltip.set('opened', true);
         assert.isTrue(px_tooltip.openRequested);
         setTimeout(function() {
             assert.isTrue(px_tooltip.visible);
             assert.isFalse(px_tooltip.openRequested);
             done();
         }, 1000); // delay is 500 ms
     });
   });
  });
}
