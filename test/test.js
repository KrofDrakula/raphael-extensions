(function($, R) {
    
    $(function() {
        var div = $('<div/>').hide().appendTo('body'),
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
        
        function cleanup() {
            paper.clear();
        }
        
        
        describe('indexOf', function() {
            
            beforeEach(cleanup);
            
            it('works on empty sets', function() {
                var set = paper.set();
                expect(set.indexOf(null)).toEqual(-1);
            });
            
            it('works for objects not in the set', function() {
                var set = makeRandomShapes(5),
                    rect = paper.rect(0,0,10,10);
                expect(set.indexOf(rect)).toEqual(-1);
            });
            
            it('works for object in the set', function() {
                var set = paper.set(),
                    rect = paper.rect(0,0,10,10);
                set.push(rect);
                expect(set.indexOf(rect)).toEqual(0);
            });
            
            it('works for larger sets', function() {
                var set = makeRandomShapes(1000),
                    rect = set[500];
                expect(set.indexOf(rect)).toEqual(500);
            });
        });
        
        
        describe('slice', function() {
            
            beforeEach(cleanup);
            
            it('works on empty sets', function() {
                var set = paper.set();
                
                expect(set.slice().length).toEqual(0);
            });
            
            it('works on indexes out of range', function() {
                var set = makeRandomShapes(10);
                
                expect(set.slice(10, 12).length).toEqual(0);
            });
            
            it('correctly slices sets', function() {
                var set, sliced;
                
                paper.setStart();
                paper.rect(0,  0, 10, 10).attr({ fill:'#ff0000' });
                paper.rect(10, 0, 10, 10).attr({ fill:'#00ff00' });
                paper.rect(20, 0, 10, 10).attr({ fill:'#0000ff' });
                set = paper.setFinish();
                sliced = set.slice(-2);
                
                expect(sliced[0].attr('fill')).toEqual('#00ff00');
                expect(sliced[1].attr('fill')).toEqual('#0000ff');
            });
            
            it('creates a copy of the set', function() {
                var set = makeRandomShapes(5),
                    sliced = set.slice();
                    
                expect(sliced).toNotBe(set);
            });
        });
        
        
        describe('closestTo', function() {
            
            beforeEach(cleanup);
            
            it('works on empty sets', function() {
                var set = paper.set();
                
                expect(set.closestTo(0, 0)).toBe(null);
            });
            
            it('works with passed coordinates', function() {
                var set;
                
                paper.setStart();
                paper.rect(0,0,10,10);
                paper.rect(100,100,10,10);
                set = paper.setFinish();
                
                expect(set.closestTo(0,0)).toBe(set[0]);
                expect(set.closestTo(120,120)).toBe(set[1]);
            });
            
            it('works with Raphaël elements', function() {
                var set, rect;
                
                paper.setStart();
                paper.rect(0,0,10,10);
                paper.rect(100,100,10,10);
                set = paper.setFinish();
                
                rect = paper.rect(20,20,10,10);
                expect(set.closestTo(rect)).toBe(set[0]);
                
                rect = paper.rect(120,120,10,10);
                expect(set.closestTo(rect)).toBe(set[1]);
            });
            
        });
        
        
        // run the runner
        jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
        jasmine.getEnv().execute();
    });
    
})(jQuery, Raphael);