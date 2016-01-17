/**
 * Created by pery on 16/01/2016.
 */
(function utils(){
    /**********
     * API
     **********/
    window.utils = {
        animateAlongPath: animateAlongPath
        ,buildPathString: buildPathString
        ,randomColor: randomColor
        //,indexToCoordinate: indexToCoordinate
    };

    function animateAlongPath( path, element, start, dur ) {
        var len = Snap.path.getTotalLength( path );
        Snap.animate( start, len, function( value ) {
            var movePoint = Snap.path.getPointAtLength( path, value );
            element.attr({ x: movePoint.x, y: movePoint.y });
        }, dur);
    }
    
    function buildPathString( points ){
        const cubeSize = 70;
        return points
            .split(' ')
            .map(indexToCoordinate.bind(null,cubeSize))
            .join('')
            .replace('L','M');
    }

    /**
     * privete
     * @param cubeSize
     * @param index
     * @returns {string}
     */
    function indexToCoordinate( cubeSize, index){
        const lineLength = 10 ;
        const d = cubeSize / 2;
        var c = {
            x: (index % lineLength) * cubeSize,
            y: (index / lineLength | 0) * cubeSize
        };

        return  ['L',c.x + d, c.y + d].join(' ');

    }

    function randomColor() {
//            var letters = '0123456789ABCDEF'.split('');
        var letters = '23456789ABC'.split('');
        var color = '#';
        for (var i = 0; i < 3; i++ ) {
            color += letters[Math.random() * letters.length | 0];
        }
        return color;
    }

    function randomRGBAColor(){
        var letters = '23456789'.split('');
        var color = '';
        for (var i = 0; i < 9; i++ ) {
            color += letters[Math.random() * letters.length | 0];
        }
        color.split(/.../)

    }

})();