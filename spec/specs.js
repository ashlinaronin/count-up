describe('countUpBy', function() {
    it("counts up by multiples of 5 to 5", function() {
        expect(countUpBy(5, 5)).to.eql([5]);
    });

    it("counts up by multiples of 5 to 30", function() {
        expect(countUpBy(5, 30)).to.eql([5, 10, 15, 20, 25, 30]);
    });

    it("counts up by multiples of 7 to 7", function(){
        expect(countUpBy(7, 7)).to.eql([7]);
    });

    it("counts up multiples of 7 to 28", function(){
        expect(countUpBy(7, 28)).to.eql([7,14,21,28]);
    });

    it("count up mulitples of 7 to 49", function(){
        expect(countUpBy(7, 49)).to.eql([7,14,21,28,35,42,49]);
    });

    it("count up mulitples of 7 to 50", function(){
        expect(countUpBy(7, 50)).to.eql([7,14,21,28,35,42,49]);
    });


});
