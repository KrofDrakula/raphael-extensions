(function($, R) {
    $(function() {
        var div = $('<div/>').appendTo('body'),
            paper = R(div[0], 400, 300);
        
        function makeRandomShapes(n) {
            paper.setStart();
            for (var i = 0; i < n; i++) {
                paper.rect(Math.random() * paper.width, Math.random() * paper.height, Math.random() * paper.width, Math.random() * paper.height).attr({fill:randomColor()});
            }
            return paper.setFinish();
        }
        
        function randomColor() {
            var s = '#', i, a;
            for (i = 0; i < 3; i++) {
                a = Math.floor(Math.random() * 256).toString(16);
                s += (a.length == 1) ? '0' + a : a;
                
            }
            return s;
        };
        
        function setUp() {
            paper.clear();
        }
        
        
        describe("indexOf", function() {
            beforeEach(setUp);
            
            it("maps correctly", function() {
                var set = [];
                // finish test
            });
        });
        
    });
})(jQuery, Raphael);