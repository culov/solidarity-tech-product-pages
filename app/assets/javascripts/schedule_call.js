	var offset = 0;
	var maxOffset = 2; // 2
	var calendar = null;
	$(function(){


		$(".language_container input").click(function(){
			refreshSchedule();
		});

		$(document).on("click", ".date_circle", function(e){
			if($(this).parents(".unavailable").length == 0){
				if (typeof ga !== "undefined"){ga('send', 'event', "schedule_call", "select_date", "select_date");}
				switchToTimeSelect(calendar[$(this).parents(".date_container").index()]);
			}
		});

		$(document).on("click", ".time_button", function(e){
			
			$(".time_button").show();
			$(this).hide();
			$(".time_row .confirm").addClass("display_none");
			$(this).parents(".time_row").find(".confirm").removeClass("display_none");
			if (typeof ga !== "undefined"){ga('send', 'event', "schedule_call", "select_time", "select_time");}
		});


		$(document).on("click", ".confirm_button", function(e){
			var self = this;
			if(!$(this).hasClass("disabled")){
				$(this).html('<i class="fa fa-spinner fa-spin" id="spinner"></i>').addClass("disabled");
				if (typeof ga !== "undefined"){ga('send', 'event', "schedule_call", "confirm", "confirm");}
				var language = $(".language_container input:checked");

				var params = {timestamp:$(this).attr("data-timestamp"), language: language.val()}
				try {
				  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
				  params["timezone"] = timezone;
				}catch(err) {
    			}

				$.post("/me/call/schedule", params).done(function(msg){  
					window.location.replace("/me/call/confirm");
				}).fail(function(xhr, status, error) {
				    //alert time not available anymore
				    //And refresh calendar
				    alert("The time you selected is no longer available. Please choose another time.")
				    switchToDateSelect();
				});

					
			
			}
		});

		
		

		$(".back_to_date .fa-times-circle-o").click(function(){
			switchToDateSelect();
			if (typeof ga !== "undefined"){ga('send', 'event', "schedule_call", "back_to_date", "back_to_date");}
		})

		$(".next_week").click(function(resp){
			offset++;
			$(".next_week, .previous_week").addClass("display_none");
			refreshSchedule();
			if (typeof ga !== "undefined"){ga('send', 'event', "schedule_call", "next_week", "next_week");}
		});
		$(".previous_week").click(function(resp){
			offset--;
			$(".next_week, .previous_week").addClass("display_none");
			refreshSchedule();
			if (typeof ga !== "undefined"){ga('send', 'event', "schedule_call", "previous_week", "previous_week");}
		});

		refreshSchedule();


	});

	function switchToTimeSelect(date){
		$(".language_container input").attr("disabled", true);
		$(".select_a_date_container").hide();
		$(".select_a_time_container").fadeIn();
		createTimeTable(date);
	}

	function switchToDateSelect(){
		$(".language_container input").attr("disabled", null);
		$(".select_a_date_container").fadeIn();
		$(".select_a_time_container").hide();
		offset=0;
		refreshSchedule();
	}
	function createTimeTable(date){
		$(".back_to_date span").html("Selected " + date.day_of_week + ", " + date.day)
		$(".select_a_time").html("");
		$.each(date.availability, function(i, time) {
			
			var d = $(".template .time_row").clone();
			d.find(".time_button").html(time.readable);
			d.find(".confirm_button").attr("data-timestamp", time.timestamp);
			d.find(".time_label").html(time.readable);
			$(".select_a_time").append(d);
		});

	}


	function refreshSchedule(){
		$(".select_a_date").html("");

		var language = $(".language_container input:checked");

		var params = {offset:offset};
		if(language.length > 0){
			params["language"] = language.val();
		}


		try {
		  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		  params["timezone"] = timezone;
		}
		catch(err) {
			// alert("errorr!!!"+err)
		}



		$("#loading_spinner").removeClass("hidden");



		$.post("/me/call/schedule/check",params,function(resp){
			calendar = resp;
			$.each(resp, function(i, day) {
				$("#loading_spinner").addClass("hidden");
				var d = $(".template .date_container").clone();
				d.find(".day_of_week").html(day.day_of_week);
				d.find(".month_and_day").html(day.day);
				if(day.availability.length == 0){
					d.addClass("unavailable");
				}
				if(i==0){
					var today = new Date();

					if(today.getDate() == day.day_number && today.getMonth() == day.month_number ){
						d.find(".today").removeClass("display_none");
					}

					$(".prev_week_date").html("before " + day.day_full);
				}
				d.find(".day_of_week_full").html(day.day_of_week_full);
				d.find(".date_full").html(day.day_full);
				$(".select_a_date").append(d);

				if(i==resp.length-1){
					$(".next_week_date").html("after " + day.day_full);
				}


				if(offset==0 || offset < maxOffset){
					$(".next_week").removeClass("display_none");
				}
				if(offset==0){
					$(".previous_week").addClass("display_none");
				}
				else{
					$(".previous_week").removeClass("display_none");
				}


			});

		});
	}