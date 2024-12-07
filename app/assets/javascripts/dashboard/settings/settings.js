class Settings {
	constructor() {
		this.scope = $('*[data-st-controller="' + this.constructor.name + '"]');
		this.addEventListeners();
	}

	addEventListeners(){
		var self = this;


		$(document).on("click", '*[data-st-controller="Settings"] .edit-template', function(e){
			e.preventDefault();
			//populate edit text template overlay and show#edit-text-templat
			var myHash = $(this).data("templates");
			myHash["name"] = $(this).data("name");
			myHash["hash_id"] = $(this).data("hash-id");
			self.constructEditTextTemplateOverlayWithData(myHash);
			$("*[data-st-controller='Settings'] #edit-text-template").modal("show");
		});


		$(document).on("click", '*[data-st-controller="Settings"] #tab_text_templates a.archive, *[data-st-controller="Settings"] #tab_archived_text_templates a.archive', function(e){
			e.preventDefault();
			
			var parent = $(this).closest("tr");
			var params = {text_template_id: parent.attr("data-text-template-id")};

			if($(this).hasClass("unarchive")){
				params["unarchive"] = true;
			}
			else{
				params["archive"] = true;
			}
			$.post("/settings/text-templates/archive", params, function(resp){
				parent.remove();
			});

		});








		$(document).on("click", '*[data-st-controller="Settings"] .edit-email-sender', function(e){
		
			e.preventDefault();
			//populate edit text template overlay and show
			var myHash = {};
			myHash["name"] = $(this).data("name");
			myHash["email"] = $(this).data("email");
			myHash["hash_id"] = $(this).data("hash-id");
			self.constructEditEmailSenderOverlayWithData(myHash);
			$("*[data-st-controller='Settings'] #edit-email-sender").modal("show");
		});

		$(document).on("click", '*[data-st-controller="Settings"] .archive_email_wrapper', function(e){
			e.preventDefault();
			//populate edit text template overlay and show

			var params = {hash_id: $(this).data("hash-id")};
			var question = "Archiving this email wrapper will make in unaccessible everywhere. Are you sure you want to proceed?";
			if($(this).hasClass("unarchive")){
				params["unarchive"] = true;
				question = "Unarchiving this email wrapper will make it accessible again. Are you sure you want to proceed?";
			}
			else{
				params["archive"] = true;
			}
			

			if(confirm(question)){
				
				$.post("/settings/email-wrappers/archive", params, function(resp){
					window.location.replace('/settings/email-wrappers')
				});
			}
		});

		

		$(document).on("click", '*[data-st-controller="Settings"] #tab_email_senders a.archive, *[data-st-controller="Settings"] #tab_archived_email_senders a.archive', function(e){
			e.preventDefault();
			
			var parent = $(this).closest("tr");
			var params = {email_sender_id: parent.attr("data-email-sender-id")};

			if($(this).hasClass("unarchive")){
				params["unarchive"] = true;
			}
			else{
				params["archive"] = true;
			}
			$.post("/settings/email-senders/archive", params, function(resp){
				parent.remove();
			});

		});





	}

	constructPage() {
		this.constructAddTextTemplateOverlayWithData();
		this.constructAddEmailSenderOverlayWithData();
	}

	constructAddTextTemplateOverlayWithData(){
		var engine = new liquidjs.Liquid();
		var template = document.querySelector('#add-textbox-template[type="text/template"]');
		if(template!=null){
			var ttHtml = engine.parseAndRenderSync(template.innerHTML, {"hash_id":"new_template"});
  			$("#add-text-template #modal-body-template-container").html(ttHtml);
  		}
	}
	constructEditTextTemplateOverlayWithData(myHash){
		var engine = new liquidjs.Liquid();
		var template = document.querySelector('#edit-textbox-template[type="text/template"]');
		if(template!=null){
			var ttHtml = engine.parseAndRenderSync(template.innerHTML, myHash);
  			$("#edit-text-template #modal-body-template-container").html(ttHtml);
  		}
	}
	constructAddEmailSenderOverlayWithData(){
		var engine = new liquidjs.Liquid();
		var template = document.querySelector('#email-sender-template[type="text/template"]');
		if(template!=null){
			var ttHtml = engine.parseAndRenderSync(template.innerHTML, {"hash_id":"new_template"});
  			$("#add-email-sender #modal-body-template-container").html(ttHtml);
  		}
	}
	constructEditEmailSenderOverlayWithData(myHash){
		var engine = new liquidjs.Liquid();
		var template = document.querySelector('#email-sender-template[type="text/template"]');
		if(template!=null){
			var ttHtml = engine.parseAndRenderSync(template.innerHTML, myHash);
  			$("#edit-email-sender #modal-body-template-container").html(ttHtml);
  		}
	}

}