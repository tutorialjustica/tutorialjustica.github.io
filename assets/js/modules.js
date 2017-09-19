$(document).ready(function () {

    console.log("Init");

        $('.masonry-grid').masonry({
            // options
            itemSelector: '.masonry-item',
            columnWidth: ".masonry-item",
            gutter: 0,
            percentPosition: true
        });
});