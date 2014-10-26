function visitBfs(node, func) {
    var q = [node];
    while (q.length > 0) {
        node = q.shift();
        if (func) {
            func(node);
        }
        for (var i=0; i<node.children.length; i++) {
            if (node.children.length > 0 ) {
                var child = node.children[i];
                var breadth = node.children.length;
                index = _.indexOf(node.children, node);
                if (child.tagName == "LI") {

                    $( child ).addClass( "width-" + breadth );
                    console.log(child);   /* displays item's html tag / attributes  */
                    console.log(node.children.length);   /* displays number of items in level (breadth) */
                    // console.log(child.tagName);
                    // console.log($( child ).siblings());
                }
            }
        }
 
        _.each(node.children, function (child) {
            q.push(child);
            // console.log(child);
        });
    }
}

jQuery(document).ready(function ($) {
    var node = document.getElementsByClassName('menu')[0];
    // console.log(node);
    visitBfs(node);

    /*$( "li" ).each(function( index, value ) {
    	$( this ).addClass( "ul-test" );
    	// console.log( index + ": " + $( this ).text() );
    	console.log(value);
    });*/

    /*var listItems = $(".menu li");
    listItems.each(function(li) {
        console.log($(this).attr('class'));
    });*/

});

