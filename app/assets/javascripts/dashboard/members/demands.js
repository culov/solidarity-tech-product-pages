class Demands {
	constructor() {

		// console.log("this.canEdit: ", this.canEdit);
		// this.addEventListeners();
	}
	initActivity(){
		 // $('li.activity .card-content .read-note').readmore({ speed: 75, collapsedHeight: 100 });
		 // $('[data-toggle="tooltip"]').tooltip();
	}
	makeLanguageRowEditable(elm){

		$(elm).editable({
			url: "/demands/save",
			name: $(elm).parent().attr("data-language"),
			params:{demand_id: this.demandId},
			showbuttons: 'bottom',
		});

		// console.log("makeLanguageRowEditable:", makeLanguageRowEditable)
	}
	constructPage() {

		var that = this;
		this.demandId = $("div[data-demand-id]").attr("data-demand-id");
		this.canEdit = $("div[data-can-edit]").data("can-edit");

		if(this.canEdit){
			
			$.each($(".language_row *[data-language] span"), function(i, elm){
				that.makeLanguageRowEditable(elm);
			});


			$("#add_language").click(function(){
				$.each($("*[data-language]"), function(i, e){
					$("#add_language_overlay .select-language option[value='" + $(e).attr("data-language") + "']").attr("disabled", true).removeAttr("selected");
				});
			});

			
			$(".toggle-row .ios-checkbox input#demand_is_active").click(function(event){

				var nextValue = $(this).prop("checked");
				var enableOrDisable = nextValue ? "enable" : "disable";
				if(confirm("Are you sure you want to "+enableOrDisable+" this demand?")){

					$.post("/demands/save", {demand_id: that.demandId, name: "is_active", value: nextValue}, function(resp){

					});
				}
				else{
					var self = this;
					setTimeout(function(){$(self).prop("checked", !nextValue)}, 20);
					return false;
				}
				
			});

			$(document).off("click", ".language_row button.btn-default", this.deleteLanguageRow);
			$(document).on("click", ".language_row button.btn-default", this.deleteLanguageRow);
			$(document).off("click", "#submit_new_language_button", this.submitNewLanguage);
			$(document).on("click", "#submit_new_language_button", this.submitNewLanguage);
		}
	}
	submitNewLanguage(){
				var self = this;
				// console.log("this.demandId ", this.demandId, this)
				
				var myLang = $("#add_language_overlay .select-language").val();
				if(!App.utils.isEmptyOrSpaces(myLang)){
					$(this).button("loading");
					var params = {language: myLang, demand_id: $("div[data-demand-id]").attr("data-demand-id"), demand_title: $("#add_language_overlay textarea").val()};

				    $.post("/demands/add/language", params, function(resp){
				    	$(self).button("reset");
				        $("#languages_container").append(resp);
				        $("#add_language_overlay").modal("hide");
				        $("#add_language_overlay .select-language option:selected").removeAttr("selected");
				        $("option#select_a_language").attr("selected", true);
				        $("#add_language_overlay textarea").val("");
				        var elm = $(".language_row *[data-language='"+myLang+"'] span")[0];

				      
				        self.makeLanguageRowEditable(elm);
				    });
				}
			}

	deleteLanguageRow(){

		var langCode = $(this).closest(".language_row").find("div[data-language]").attr("data-language");
	    var langFull = $(this).closest(".language_row").find("div[data-language-name]").attr("data-language-name");
		var self = this;
		if(confirm("Remove "+langFull+" language?")){
		var params = {language: langCode, demand_id: $("div[data-demand-id]").attr("data-demand-id")};
		  $.post("/demands/remove/language", params, function(resp){
		    $(self).closest(".language_row").fadeOut();
		  });
		}

	}


};

