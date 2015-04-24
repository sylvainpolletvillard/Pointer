    var $div = document.querySelector('#pointer');
    var $console = document.querySelector('#console');
    var EVENTS = {
        up: 'pointerup',
        down: 'pointerdown',
        move: 'pointermove',
        over: 'pointerover',
        cancel: 'pointercancel',
        out: 'pointerout',
        leave: 'pointerleave',
        enter: 'pointerenter'
    };

    for(var eventName in EVENTS){
        console.log(EVENTS[eventName]);
        $div.addEventListener(EVENTS[eventName], function (event) {
            var $eventElement = document.createElement('div');
            $eventElement.innerHTML = getTime()+': ' + event.type;
            $console.insertBefore($eventElement, $console.firstChild);
        }, false);
    }
    function getTime() {
        var currentdate = new Date();
        return ((currentdate.getHours()<10) ? "0"+currentdate.getHours() : currentdate.getHours()) + ":"
            + ((currentdate.getMinutes()<10) ? "0" + currentdate.getMinutes() : currentdate.getMinutes())+":"
            + ((currentdate.getSeconds()<10) ? "0"+currentdate.getSeconds() : currentdate.getSeconds());
    }

    function onChange() {
        $div.pointerTracker.setMoveHoverState(document.getElementById('checkbox').checked);
    }
