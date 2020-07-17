(function ($) {

	$(document).ready(function () {

		/**
		 * Run when click the Go button.
		 *
		 * @since 0.1.0
		 */
		$('#wpj_mp_dashboard_search__submit').on('click', function(e) {
			e.preventDefault();
			search_member();
		});

		/**
		 * Run when press enter on the input field.
		 *
		 * @since 0.1.0
		 */
		$('#wpj_mp_dashboard_search__value').keyup(function(e) {
			// Apparently 13 is the enter key
			if ( e.which == 13 ) {
				e.preventDefault();
				search_member();
			}
		});

		function search_member() {
			var loc = '/wp-admin/admin.php?page=memberpress-members';

			var search = escape($('#wpj_mp_dashboard_search__value').val());

			loc = loc + '&search=' + encodeURIComponent(search) + '&search-field=any';

			// Clean up
			if(!/\?/.test(loc) && /&/.test(loc)) {
				loc = loc.replace(/&/,'?');
			}

			window.location = loc;
		}

		/**
		 * Run when press enter on the input field on the MemberPress Members page.
		 *
		 * We just trigger a click on the submit button as We don't want to repeat
		 * the code logic to trigger the search. If this breaks in the future then 
		 * the logic will need to be written.
		 * See as reference search_member() function in this file.
		 *
		 * @since 0.1.1
		 */
		$('#cspf-table-search').keyup(function(e) {
			// Apparently 13 is the enter key
			if ( e.which == 13 ) {
				e.preventDefault();
				$('#cspf-table-search-submit').trigger('click');
			}
		});

	});

})(jQuery);