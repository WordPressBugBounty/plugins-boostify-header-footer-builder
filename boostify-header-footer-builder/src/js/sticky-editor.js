(function($) {
	'use strict';
	console.log(1111111);
	console.log(elementor);
	if ( typeof elementor !== 'undefined') {
		window.elmentor = elementor;
	}
	// elementor.on( "preview:loaded", function() {
	// 	var editor = elementor.$previewContents[0].body;
	// 	var $sticky = $(editor).find( '.boostify-sticky-yes' );
	// 	var bodyTop     = $( editor ).offset().top;
	// 	if ( $sticky.length != 0 ) {
	// 		$sticky.each(
	// 			function ( index ) {
	// 				var sticky   = $( this );
	// 				var copyElem = sticky.siblings( '.elementor-section' );
	// 				if ( copyElem.hasClass( 'elementor-sticky--active' ) || ( copyElem.hasClass( 'elementor-sticky--active' ) && copyElem.hasClass( 'she-header-yes' ) ) ) {
	// 					return;
	// 				}
	// 				var top         = sticky.offset().top;
	// 				var left        = sticky.offset().left;
	// 				var width       = sticky.width();
	// 				var height      = sticky.height();
	// 				var widthScreen = $( window ).width();
	// 				var data        = sticky.attr( 'data-settings' );
	// 				data            = JSON.parse( data );
	// 				var screen      = data.bstick_on;
	// 				var wrap        = sticky.parents( '.elementor-section-wrap' );
	// 				var element     = sticky.html();
	// 				var classSticky = sticky.attr( 'class' );
	// 				var margin      = data.bsticky_distance;
	// 				var logo        = sticky.find( '.custom-logo' );
	// 				var logoUrl     = logo.attr( 'src' );
	// 				var logoStick   = data.image.url;
	// 				var menuColor   = data.bsticky_menu_color;
	// 				var tranparent  = sticky.hasClass( 'boostify-header-tranparent-yes' );
	// 				if ( widthScreen >= 1025 ) {
	// 					var enabled = 'desktop';
	// 				} else if ( widthScreen > 767 && widthScreen < 1025 ) {
	// 					var enabled = 'tablet';
	// 				} else if ( widthScreen <= 767 ) {
	// 					var enabled = "mobile";
	// 				}
	// 				if ( screen.includes( enabled ) ) {
	// 					if ( ! tranparent ) {
	// 						var coppyClass = 'boostify-header--default elementor-section';
	// 						if ( sticky.hasClass( 'elementor-hidden-mobile' ) ) {
	// 							coppyClass += ' elementor-hidden-mobile';
	// 						}

	// 						if ( sticky.hasClass( 'elementor-hidden-tablet' ) ) {
	// 							coppyClass += ' elementor-hidden-tablet';
	// 						}

	// 						if ( sticky.hasClass( 'elementor-hidden-desktop' ) ) {
	// 							coppyClass += ' elementor-hidden-desktop';
	// 						}

	// 						sticky.after(
	// 							'<section class="' + coppyClass + '">' +
	// 							element +
	// 							'</section>'
	// 						);

	// 						var copy = sticky.siblings( '.boostify-header--default' );

	// 						copy.css(
	// 							{
	// 								'visibility' : 'hidden',
	// 								'transition' : 'none 0s ease 0s',
	// 							}
	// 						);
	// 					}

	// 					sticky.css(
	// 						{
	// 							'top' : top + 'px',
	// 							'position' : 'fixed',
	// 							'left' : left + 'px',
	// 							'width' : width + 'px',
	// 						}
	// 					);
	// 					var copyMargin = top + margin.size;
	// 					if ( $( window ).scrollTop() > top ) {
	// 						sticky.css( {'top' : bodyTop + 'px' } );
	// 						if ( menuColor && menuColor !== '' ) {
	// 							sticky.find( '.boostify-menu > li > a' ).css( { 'color' : menuColor } );
	// 						}
	// 						if ( logoStick != '' ) {
	// 							logo.attr( 'src', logoStick );
	// 						} else {
	// 							logo.attr( 'src', logoUrl );
	// 						}
	// 						sticky.addClass( 'boostify-sticky--active' );
	// 						sticky.css( {'background-color' : data.bsticky_background } );
	// 					} else {
	// 						sticky.css( 'top', top + 'px' );
	// 						if ( ( top - $( window ).scrollTop() ) > 0 ) {
	// 							sticky.css( {'top': ( top - $( window ).scrollTop() ) + 'px'} );
	// 						}
	// 					}

	// 					$( editor ).scroll(
	// 						function() {
	// 							alert('222');
	// 							var scroll = $( window ).scrollTop();

	// 							if ( ( top - scroll ) >= 0 ) {
	// 								sticky.css( {'top': ( top - scroll ) + 'px'} );

	// 								sticky.removeClass( 'boostify-sticky--active' );
	// 								sticky.css( { "background-color" : '' } );
	// 								logo.attr( 'src', logoUrl );
	// 								sticky.find( '.boostify-menu > li > a' ).css( { 'color' : '' } );

	// 							} else {
	// 								sticky.css( {'top' : bodyTop + 'px' } );

	// 								sticky.addClass( 'boostify-sticky--active' );
	// 								sticky.css( {'background-color' : data.bsticky_background } );
	// 								if ( menuColor && menuColor != '' ) {
	// 									sticky.find( '.boostify-menu > li > a' ).css( { 'color' : menuColor } );
	// 								}

	// 								if ( logoStick != '' ) {
	// 									logo.attr( 'src', logoStick );
	// 									logo.attr('srcset', '');
	// 								} else {
	// 									logo.attr( 'src', logoUrl );
	// 								}
	// 							}
	// 						}
	// 					);
	// 				}


	// 				$( window ).resize(
	// 					function() {
	// 						width = $( window ).width();
	// 						sticky.css( { 'width' : width + 'px' } );
	// 						sticky.css( { 'top' : bodyTop + 'px' } );
	// 						if ( $( window ).scrollTop() > top ) {
	// 							sticky.css( {'top' : bodyTop + 'px' } );
	// 						} else {
	// 							if ( ( top - $( window ).scrollTop() ) > 0 ) {
	// 								sticky.css( {'top': ( top - $( window ).scrollTop() ) + 'px'} );
	// 								// sticky.css({'top': 0 + 'px'});
	// 							}
	// 						}
	// 					}
	// 				);
	// 			}
	// 		);
	// 	}
	// })
})(jQuery);