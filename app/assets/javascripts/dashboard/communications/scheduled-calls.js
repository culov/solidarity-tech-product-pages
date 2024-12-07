// App.ScheduledCalls = App.ScheduledCalls || {
class ScheduledCalls {

	constructor() {
		this.addEventListeners();
	}

	addEventListeners() {
		// add document event listeners
		// alert("add event listeners to calls!")


		$(document).on('click', '*[data-st-controller="ScheduledCalls"] .remove_caller', function(e) {
			e.preventDefault();
			var agentName = $(this).closest("tr").find(".agent_name a").html()
			if (confirm("Are you sure you want to remove " + agentName)) {
				var self = this;
				var hashId = $(this).closest("tr").attr("data-aea-user-id")
				$.post("/xKM4jMqzE-2uZH3jLQRl4GhrTFMBumeOV6GFMjiCEEBLQoKPecRlcu1prEo8eXrVq5guWP-DUhOXGmZQeRJ1Qg", {
					hash_id: hashId
				}, function() {
					$(self).closest("tr").remove();
				});
			}

		})



		// alert("initing 1 to add event listen")
		$(document).on('change', '*[data-st-controller="ScheduledCalls"] input[name="caller_enabled"]', function(e) {

			var self = this;
			var hashId = $(this).closest("tr").attr("data-aea-user-id");
			var nextValue = $(this).prop("checked");
			var nextLabel = nextValue ? "enabled" : "disabled";
			
			$.post("/calls/scheduled/caller/update", {
					hash_id: hashId,
					type: "toggle_is_active",
					enabled: nextValue,
				}, function(resp) {
					$(self).closest("td").attr("data-order", (nextValue ? 0 : 1));
					$.toast({text: "Scheduled calls "+nextLabel+" for " + $(self).closest("tr").find(".agent_name a").html(),  position: 'bottom-center', hideAfter:true, hideAfter : 5000, });
				});

		});




		$(document).on('change', '*[data-st-controller="ScheduledCalls"] .select2-single.trained_by', function(e) {
			var userHashId = $(this).closest("tr").attr("data-aea-user-id");
			$.post("/calls/scheduled/caller/update", {
				type: "trained_by",
				hash_id: userHashId,
				trained_by_hash_id: $(this).val()
			}, function(resp) {

			});
		});


		$(document).on('click', 'button[data-calendar-nav]', function() {
			// alert('hi')
			console.log("GO", $(this).data('calendar-nav'))
			calendar.navigate($(this).data('calendar-nav'));
		});



	}
	constructPage() {
		//called after every initial and following page load

		// alert("scheduled call construct page")

	calendar = $('#calendar_container').calendar({
			events_source: '/calls/scheduled/lookup', 
			tmpl_path: "/calendar/tmpls/", 
			modal: "#events-modal", 
			modal_type : "ajax", 
			modal_title : function (e) { return e.title },
	  		call_id : function (e) { return e.id },
			member_name : function (e) { return e.member_name },
			agent_name : function (e) { return e.agent_name },
			member_url : function (e) { return e.member_url },
			agent_url : function (e) { return e.agent_url },
	  		missed : function (e) { return (e.missed==true ? 'missed' : '') },
			call_time : function (e) { return e.call_time },
			call_timestamp : function (e) { return e.end },
	  		call_language : function (e) { return e.call_language },
	  		action_page_a : function (e) { return e.action_page_a },
			call_scheduled_at : function (e) { return e.call_scheduled_at },
			weekbox: false,
			onAfterModalShown: function(events){
	        //reset reassign box to null
	    }});


		setTimeout(function(){

		
			$('button[data-calendar-view]').each(function() {
				var $this = $(this);
				$this.click(function() {
					calendar.view($this.data('calendar-view'));
				});
			});


			$('a#cancel-call-button').on('ajax:success', function(ev) {
				calendar._loadEvents();
				calendar._render();
			});

			
			$(".select2-single.trained_by").select2({
				theme: "bootstrap",
				containerCssClass: ':all:',
				width: "140px",
				ajax: {
					url: "/search/users/json",
					dataType: 'json',
					delay: 250,
					data: function(params) {
						return {
							category: "team_members",
							query: params.term, // search term
						};
					},
					processResults: function(data, params) {
						return {
							results: data
						};
					},

				},
				placeholder: 'Search team members',
				minimumInputLength: 1,
				templateResult: App.utils.formatUser,
				templateSelection: App.utils.formatUserSelection
			});


			$(".select2-single.reassign_to.sc--reassign-to-any").select2({
				theme: "bootstrap",
				containerCssClass: ':all:',
				width: "style",
				ajax: {
					url: "/search/users/json",
					dataType: 'json',
					delay: 250,
					data: function(params) {
						return {
							category: "team_members",
							query: params.term, // search term
						};
					},
					processResults: function(data, params) {
						return {
							results: data
						};
					},

				},
				placeholder: 'Search team members',
				minimumInputLength: 1,
				templateResult: App.utils.formatUserFull,
				templateSelection: App.utils.formatUserSelection
			});


			$(".select2-single.reassign_to").change(function(e) {
				var newUserHash = $(this).val();
				var callId = $("#events-modal").attr("call-id");
				if (callId != undefined && newUserHash != undefined && callId != null && newUserHash != null && callId != "" && newUserHash != "") {
					$.post("/calls/scheduled/reassign", {
						user_id: newUserHash,
						call_id: callId
					}, function(resp) {
						if (resp.success) {
							$("#events-modal").modal("hide");
							calendar._loadEvents();
							calendar._render();
							$(".reassign_to").val('').trigger('change');
						}
					});
				}

			});



		}, 500);


	}

};






// export default class extends Controller {
//   // …
// }