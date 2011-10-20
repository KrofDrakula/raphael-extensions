(function($, R) {
    $(function() {
        var paper = R($('#container')[0], 400, 300);
        
        function makeShapes(n) {
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
        
        var set = makeShapes(10);
        
        console.debug(set.slice(5));
        
        var set2 = paper.set();
        
        console.debug(set.slice(1));
    });
})(jQuery, Raphael);