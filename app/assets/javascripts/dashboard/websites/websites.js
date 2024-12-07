class Websites {
	constructor() {
		this.scope = $('*[data-st-controller="' + this.constructor.name + '"]');
		this.addEventListeners();
	}

	customValidator(){
		return {
		  // custom: {
		  //   'unique-by-website': function(el){
		  //   	var websiteId = $(el).data("website-id");
		  //    	$.post("/sites/"+websiteId+"/pages/validate",{name: $(el).attr("name"), value: $(el).val()}, function(resp){
		  //    		if(resp.taken){
		  //    			App.utils.titlecase($(el).attr("name"))
		  //    			return "This " + App.utils.titlecase($(el).attr("name"))+" is already taken."
		  //    		}
		  //    	})
		  //   }
		  // }
		}
	}

	addEventListeners(){
		var self = this;


		// $(document).on("click", "[data-page='LeaderWebsiteIndex'] .section_toggle", function(e){
 	// 		var nextStatusHidden = $(this).hasClass("down");
 	// 		$(this).toggleClass("down");
 	// 		$(this).siblings(".section_content").toggleClass("hidden");

 	// 	});

		$(document).on("click", ".create_page .actionpage_type_card", function(){
			$(".create_page .actionpage_type_card.active").removeClass("active");
			$(this).addClass("active");

			$("#extra_submenus_for_create_page .submenu").addClass("hidden").find("input, select").attr("disabled", true).attr("data-validate", false);
			if($(this).data("submenu-id")!=undefined){
				$("#extra_submenus_for_create_page #"+$(this).data("submenu-id")).removeClass("hidden").find("input, select").attr("disabled", null).attr("data-validate", true);
			}
			
		});

		$(document).on("click", ".create_page .actionpage_type_submenu_card", function(){
			$(this).closest(".submenu").find(".actionpage_type_submenu_card.active").removeClass("active");
			$(this).addClass("active");
		})


		$(document).on("keyup", ".create_page .new_page_name", function(e){
			$(".create_page .new_page_url_slug").val( App.utils.parameterize($(this).val()) ).trigger("change");
		});

		$(document).on("click", ".website--navigation .sortable-item .edit-button", function(e){
	    	e.preventDefault();
	
	    	$(this).closest("li").find(".editor-wrapper").toggleClass("hidden");
	    	if($(this).html().includes("Done")){
	    		var label = $(this).closest("li").find(".multilingual-tab-container input").val();
	    		$(this).closest("li").find(".sortable-item-label > span").html(label)
	    		$(this).html("Edit");
	    	}
	    	else{$(this).html("Done")}
		});

		
		 $(document).on("change", ".menu-bar-editor-adder", function(e){
	    	var val = $(this).val();
	    	var template = $('#template_'+val+'[type="text/template"]');
	    	var newElm = $(template[0].innerHTML);
	    	$(this).closest(".section_content").find(".navigation-form-container").append(newElm);
	    	

			$(this).val("");
			self.initializeForms();
			sortable('.sortable-form',{ forcePlaceholderSize: true,  acceptFrom: '.sortable-form-subform, .sortable-form', handle: '.grippy'});
			sortable('.sortable-form-subform', {forcePlaceholderSize: true,  acceptFrom: '.sortable-form, .sortable-form-subform', handle: '.grippy'});
	    });


	   	$(document).on("click", ".website--navigation .sortable-item .trash-button:not(.disabled)", function(e){
            if(confirm("Are you sure you want to delete this item?")){
                $(this).closest("li").fadeOutAndRemove("fast");
            }
        });

		$(document).on("change", ".select_branding_status", function(e){
			if($(this).val() == "chapter_fallback_to_org"){
	    		$(".branding_extras").addClass("hidden");
	    	}
	    	else{
	    		$(".branding_extras").removeClass("hidden");
	    	}

	    });


	}
	initializeForms(){
		$('#tab_navigation form.validatable-form-component').off("submit", "form.validatable-form-component").validator('destroy');
		$('#tab_navigation form.validatable-form-component').on('submit', function (e) {
		  if (e.isDefaultPrevented()) {
		    // handle the invalid form...
		  } else {
		    // everything looks good!
		    e.preventDefault();
		  }
		});
	}
	constructPage() {

		var self = this;

		// $(".create_page form").validator(this.customValidator());




		var navbarDropzone = $("#website-branding-image-dropzone");
		navbarDropzone.dropzone({
			url: "/image/upload", 
			init: function() {
              this.on("sending", function(file, xhr, formData){
              		navbarDropzone.addClass("uploading");
              		navbarDropzone.css({"background-image":""});
                  	var csrf_token = $('meta[name="csrf-token"]').attr('content');
                  	formData.append("authenticity_token", csrf_token);
                  	formData.append("menu_bar_id", navbarDropzone.data("menu-bar-id"));
              	});
	        },
	        error: function (file, errorMessage) {
	        	$.toast({
                      heading: 'Upload Error!',
                      text: errorMessage.message,
                      hideAfter : 8000,
                      loaderBg: '#ef6767',
                      position: 'bottom-center',
                      stack: false
                });
	        	if(navbarDropzone.css("background-image")=="none" || navbarDropzone.css("background-image")==""){
	        		navbarDropzone.removeClass("with-image").addClass("without-image");
	        	}
	        },
	        success: function (file, response) {
	        	navbarDropzone.removeClass("without-image").addClass("with-image").css({"background-image":"url('"+response.filekey.url+"')"});
			},
			complete: function(file) {
				navbarDropzone.removeClass("uploading");
			},
	        maxFiles: 10,
	        addRemoveLinks: true,
	        acceptedFiles:".jpeg,.jpg,.png,.gif,image/*"
		});



		var faviconDropzone = $("#favicon-image-dropzone");
		faviconDropzone.dropzone({
			url: "/image/upload", 
			init: function() {
              	this.on("sending", function(file, xhr, formData){
              		faviconDropzone.addClass("uploading");
              		faviconDropzone.css({"background-image":""});
                  	var csrf_token = $('meta[name="csrf-token"]').attr('content');
                  	formData.append("authenticity_token", csrf_token);
                  	formData.append("website_id", faviconDropzone.data("website-id"));
              	});
	        },
	        error: function (file, errorMessage) {
	        	$.toast({
                      heading: 'Upload Error!',
                      text: errorMessage.message,
                      hideAfter : 8000,
                      loaderBg: '#ef6767',
                      position: 'bottom-center',
                      stack: false
                });
	        	if(faviconDropzone.css("background-image")=="none" || faviconDropzone.css("background-image")==""){
	        		faviconDropzone.removeClass("with-image").addClass("without-image");
	        	}
	        },
	        success: function (file, response) {
	        	faviconDropzone.removeClass("without-image").addClass("with-image").css({"background-image":"url('"+response.filekey.url+"')"});
			},
			complete: function(file) {
				faviconDropzone.removeClass("uploading");
			},
	        maxFiles: 1,
	        addRemoveLinks: true,
	        acceptedFiles:".jpeg,.jpg,.png,.gif,image/*"
		});

		


		$(document).on("click", "button#save_primary_navbar", function(resp){
			var params = {type: "primary_nav"};
			var baseUrl = $('*[data-st-controller="Websites"]').attr("data-admin-url");
			var container = $(this).closest(".section_content");
			params["components"] = self.serializeMainForm(container.find("ul.navigation-form-container")[0]);
			params["background_color"] = container.find("input[name='background_color']").val();
			params["text_color"] = container.find("input[name='text_color']").val();
			params["brand_status"] = container.find("select.brand_status").val();
			params["brand_text_custom"] = container.find("input.brand_text").val();
			params["brand_url"] = container.find("input.brand_url").val();
			var button = this;
			if(!$(this).hasClass("disabled")){
				$(this).button("loading");
				// console.log(params)
				// $.post(baseUrl, params, function(resp){
				// 	$(button).button("reset");
				// });

				$.ajax({
						  type : "POST",
						  url :  baseUrl,
						  dataType: 'json',
						  contentType: 'application/json',
						  complete: function(resp){
							$(button).button("reset");
							},
						  data : JSON.stringify(params)
				});

			}
		});



		$(document).on("click", "button#save_footer_navbar", function(resp){
			var params = {type: "footer_nav"};
			var baseUrl = $('*[data-st-controller="Websites"]').attr("data-admin-url");
			var container = $(this).closest(".section_content");
			params["components"] = self.serializeMainForm(container.find("ul.navigation-form-container")[0]);
			params["background_color"] = container.find("input[name='background_color']").val();
			params["text_color"] = container.find("input[name='text_color']").val();

			params["social_media_links"] = container.find("input.social_media_links").prop("checked");
			params["footer_html"] = container.find("textarea.footer_html").val();

			params["facebook_url"] = container.find("[name='facebook_url']").val();
			params["twitter_url"] = container.find("[name='twitter_url']").val();
			params["tiktok_url"] = container.find("[name='tiktok_url']").val();
			params["instagram_url"] = container.find("[name='instagram_url']").val();

			var button = this;
			if(!$(this).hasClass("disabled")){
				$(this).button("loading");
				$.ajax({
						  type : "POST",
						  url :  baseUrl,
						  dataType: 'json',
						  contentType: 'application/json',
						  complete: function(resp){
							$(button).button("reset");
							},
						  data : JSON.stringify(params)
						});

			}
		});


		// $('table#pages-table').DataTable({
		// 	"order": [
		// 		[4, "desc"]
		// 	],
		// 	"pageLength": 300
		// });


		sortable('.sortable-form',{ forcePlaceholderSize: true,  acceptFrom: '.sortable-form-subform, .sortable-form', handle: '.grippy'});
		sortable('.sortable-form-subform', {forcePlaceholderSize: true,  acceptFrom: '.sortable-form, .sortable-form-subform', handle: '.grippy'});
		this.initializeForms();
	}

	serializeComponent(elm){
		var comp = $(elm).serializeNestedHash();
		return comp;
	}
	serializeSubform(elm){
		var self = this;
		var comp = $(elm).find("> form > div.editor-wrapper").serializeNestedHash();
		var subcomponentElms = $(elm).find(".sortable-form-subform > li");
		var subcomponents = $.map(subcomponentElms, function(elm,i){
			if($(elm).hasClass("subform-li")){
				return self.serializeSubform(elm);
			}
			else{
				return self.serializeComponent(elm);
			}
		});
		comp["submenu"] = subcomponents;
		return comp;
	}
	serializeMainForm(ul){
		var self = this;
		return $.map($(ul).find(" > li"), function(elm,i){
			if($(elm).hasClass("subform-li")){
				return self.serializeSubform(elm);
			}
			else{
				return self.serializeComponent(elm);
			}
		});
	}
}