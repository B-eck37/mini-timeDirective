angular.module('timeApp').directive('showTime', function(){
    return {
        //E = Element, A = Attribute
        restrict: 'EA',
        template: 'The current time is {{time}}',
        link(scope, element, attributes){
            scope.time = (new Date()).toString();
            element.css({
                color: 'green'
            })
        }
    }
})