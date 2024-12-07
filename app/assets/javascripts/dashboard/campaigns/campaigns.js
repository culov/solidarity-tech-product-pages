class Campaigns {
	constructor() {
	}

	initAgentsTab(){


		var eventId = $("[data-event-id]").data("event-id");
	    $(".remove_agent").click(function(e){
	      e.preventDefault();
	      var row = $(this).closest("li")
	      var agentId = $(this).attr("data-agent-id");

	      $.post("/event/agent/bank/remove",{agent_id: agentId, event_id: eventId}, function(resp){
	        row.fadeOut();
	      });

	    });



	    var users = new Bloodhound({
	      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
	      queryTokenizer: Bloodhound.tokenizers.whitespace,
	      remote: {
	        url: '/chapter/un/autocomplete/%QUERY?category=filters&meid='+eventId,
	        wildcard: '%QUERY'
	        }
	    });

	    $('#add_event_agent_lookup').typeahead({hint: false, minLength: 2}, {
	      name: 'hash_id',
	      display: 'name',
	      source: users,
	      templates: {
	      empty: [
	        '<div class="empty-message">',
	          'No results',
	        '</div>'
	      ].join('\n'),
	      suggestion:  function(data) {
	          if(data.type=="User"){
	            return '<div><span>' + data.name + '</span></div>';
	          }
	          else if(data.type=="UserFilter"){
	            return '<div><span><strong class="green">Filter:</strong> ' + data.name + '</span></div>';
	          }
	      }
	    }
	    });


	    jQuery('#add_event_agent_lookup').on('typeahead:selected', function (e, data) {

	        $(this).attr("data-type", data.type);

	        if(data.type=="User"){
	          $(this).attr("data-agent-id", data.hash_id).attr("data-agent-name", data.name);
	        }
	        else if(data.type=="UserFilter"){
	          $(this).attr("data-filter-id", data.id).attr("data-filter-name", data.name);
	        }

	        validateAddAgent()



	    });


	    $("#add_agent_container .agent_permissions input").change(validateAddAgent)
	    $("#add_event_agent_lookup").keyup(validateAddAgent)


	    $(".agent_row .agent_permissions input").change(function(){
	      var access = jQuery.map($(this).closest(".agent_permissions").find("input:checked"), function( a ) {return a.value})
	      var params = {mobilize_event_id: eventId, access: access, agent_id: $(this).closest("tr").attr("data-agent-id")};
	      $.post("/event/agent/bank/edit", params, function(resp){

	      });
	    })

	    $("#add_agent_button").click(function(){


	        if(!$(this).hasClass("disabled")){
	              var access = jQuery.map($("#add_agent_container .agent_permissions input:checked"), function( a ) {return a.value})
	              var input = $('#add_event_agent_lookup');
	              var type = input.attr("data-type");
	              var params = {mobilize_event_id: eventId, access: access, type: type};

	              if(type=="User"){
	                params["id"] = input.attr("data-agent-id");
	              }
	              else if(type=="UserFilter"){
	                params["id"] = input.attr("data-filter-id");
	              }
	              
	              $(this).button("loading");
	              var self = this;

	              
	              $.post("/event/agent/bank/add", params, function(resp){

	                 input.val("");
	                 $(self).button("reset")

	                 if(resp.success){

	                 

	                  $.each(resp.rows, function(i, elm){
	                    agentDataTable.row.add($(elm)[0]).draw();
	                  });



	                   $("#no_agents_added").remove();


	                 }


	                  });
	          }
	 


	    });

		agentDataTable = $('.sorted_table.agents_table').DataTable( {
	        "order": [[ 1, "desc" ]],
	        "pageLength": 250,
	    });



	}
}