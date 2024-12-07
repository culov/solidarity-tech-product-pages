class ReportingDashboard {

	constructor() {
		this.addEventListeners();
	}

	addEventListeners() {}
	
	constructPage() {

		this.scope = $('*[data-st-controller="' + this.constructor.name + '"]');

		Chart.defaults.global.elements.line.fill = false;

		var membershipCtx = document.getElementById("membershipChart");
		var membershipChart = new Chart(membershipCtx, {
			type: 'bar',
			options: {
				maintainAspectRatio: false,
				responsive: true,
				scales: {
					xAxes: [{
						stacked: false,
						gridLines: {
							display: false
						}
					}],
					yAxes: [{
						beginAtZero: true,
						stacked: false,
						type: 'linear',
						position: "left",
						id: "y-axis-0",
						ticks: {
							min: 0,
							userCallback: function(label) {
								// when the floored value is the same as the value we have a whole number
								if (Math.floor(label) === label) {
									return label;
								}
							}
						}
					}, {
						beginAtZero: false,
						stacked: false,
						type: 'linear',
						position: "right",
						id: "y-axis-1",
						ticks: {
							userCallback: function(label) {
								// when the floored value is the same as the value we have a whole number
								if (Math.floor(label) === label) {
									return label;
								}
							}
						}
					}, ]
				}
			},
			data: {
				labels: months,
				datasets: [{
						type: 'line',
						label: 'Total Active Members',
						yAxisID: "y-axis-1",
						borderColor: "#1aad55",
						backgroundColor: "#1aad55",
						data: totalMembers,
						fill: false
					}, {
						data: allMembers,
						yAxisID: "y-axis-0",
						label: "New Active members",
						borderColor: "#41b3f9",
						backgroundColor: "#41b3f9",
						fill: false
					}, {
						data: revokedMembers,
						yAxisID: "y-axis-0",
						label: "Revoked SMS status",
						borderColor: "#eb6864",
						backgroundColor: "#eb6864",
						fill: false
					},

				]
			}
		});




		$('#date_range').daterangepicker({
		    ranges: {
		        'All Time': [moment().subtract(10, 'years'), moment()],
		        'Today': [moment(), moment()],
		        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
		        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
		        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
		        'This Month': [moment().startOf('month'), moment().endOf('month')],
		        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		    },
		    "startDate": this.scope.data("start-date"),
		    "endDate": this.scope.data("end-date")
		}, function(start, end, label) {

		
		var newPath = location.origin+"/reporting/overview?"
		  if(label != null){
		    $("#activity_time_range").html(label);
		    newPath += "label="+label+"&"
		  }
		  else{
		    $("#activity_time_range").html(start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
		  }
		 newPath += ("start="+start.format('YYYY-MM-DD') + "&end=" + end.format('YYYY-MM-DD'));
		location.href = newPath;

		});

	}
}