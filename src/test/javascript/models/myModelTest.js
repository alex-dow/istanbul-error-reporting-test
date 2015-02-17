define(['namespace/models/myModel'], function(MyModel) {
    describe("My Model", function() {
        it("has a functional add method", function() {
            var myModel = new MyModel();
            var result = myModel.add(1,2);
            expect(result).toBe(3);
        });
    });
});
