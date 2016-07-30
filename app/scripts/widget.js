var app = angular.module("widgetApp", ['ui.bootstrap']);

app.component('kswWidget', {
    template: '<div class="kc-search-widget">' + 
                  '<div class="ksw-top">' +
                    '<div class="row">' +
                      '<div class="col-xs-12 col-md-3">' +
                        '<ksw-type></ksw-type>' +
                      '</div>' +
                      '<div class="col-xs-12 col-md-3">' +
                        '<ksw-class></ksw-class>' +
                      '</div>' +
                      '<div class="col-xs-12 col-md-6">' +
                        'three' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                  '<div class="ksw-bottom">' +
                    '<div class="row">' +
                      '<div class="col-xs-12 col-md-3">' +
                        '<input type="text" class="">' +
                      '</div>' +
                      '<div class="col-xs-12 col-md-3">' +
                        '<input type="text" class="">' +
                      '</div>' +
                      '<div class="col-xs-12 col-md-6">' +
                        '<div class="ksw-bottom-r">' +
                          '<a class="btn ksw-search-btn"><span class="ksw-icon-search"></span>Поиск</a>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +
                  '</div>'+
                '</div>',
    controller: function() {
        this.options = {

        };

        this.$onInit = function () {
            console.log('This iis');
        }
    }
});

app.component('kswType', {
    template: '<div class="ksw__dropdown" uib-dropdown>' +
      '<a href="#" class="" uib-dropdown-toggle>' +
        '<span class="ksw-icon-arrow-right"></span>В одну сторону <span class="caret"></span>' +
      '</a>' +
      '<ul class="" uib-dropdown-menu role="menu" aria-labelledby="single-button">' +
        '<li role="menuitem"><a href="#"><span class="ksw-icon-arrow-right"></span> Туда и обратно</a></li>' +
        '<li role="menuitem"><a href="#"><span class="ksw-icon-list"></span> Сложный маршрут</a></li>' +
        '<li role="menuitem"><a href="#"><span class="ksw-icon-refresh"></span> В одну сторону</a></li>' +
      '</ul>' +
    '</div>',
    controller: function() {

    }
});

app.component('kswClass', {
    template: '<div class="ksw__dropdown" uib-dropdown>' +
      '<a href="#" class="" uib-dropdown-toggle>' +
        '<span class="ksw-icon-arrow-right"></span>Эконом<span class="caret"></span>' +
      '</a>' +
      '<ul class="" uib-dropdown-menu role="menu" aria-labelledby="single-button">' +
        '<li role="menuitem"><a href="#">Эконом</a></li>' +
        '<li role="menuitem"><a href="#">Бизнес</a></li>' +
        '<li role="menuitem"><a href="#">Первый</a></li>' +
        '<li role="menuitem"><a href="#">Все классы</a></li>' +
      '</ul>' +
    '</div>',
    controller: function() {

    }
});

angular.element(document).ready(function() {
    var widgetId = document.getElementById("search-widget");
    angular.bootstrap(angular.element(widgetId), ['widgetApp']);
});