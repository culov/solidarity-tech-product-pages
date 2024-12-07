+ function($) {
    'use strict';

    // EMAIL DRAFT PUBLIC CLASS DEFINITION
    // ==============================

    var EmailDraft = function(element, options) {
        this.$element = $(element)
        this.options = $.extend({}, this.defaults(), options);
        var that = this;
        setTimeout(function() {
            that.render();
        }, 100)

    }

    EmailDraft.VERSION = '1.0.0'

    EmailDraft.DEFAULTS = {
        height: 400
    }

    EmailDraft.prototype.defaults = function() {
        // console.log("aqui esto que es: ", this.$element.data('height'))
        var setHeight = this.$element.attr('data-height');
        if(App.utils.isEmptyOrSpaces(setHeight)){
            setHeight = this.$element.find("textarea:not(.plain):not(.text-draft)[data-height]").attr("data-height");
        }
        return {
            height: !App.utils.isEmptyOrSpaces(setHeight) ? setHeight :  EmailDraft.DEFAULTS.height
        }
    }

    EmailDraft.prototype.render = function() {

        var pixelHeight = this.options.height + "px";



        $.each(this.$element.find(".draft_content"), function(i, elm) {
            if ($(elm).find(".preview_window").length > 0) {
                Split([$(elm).find(".editor_window")[0], $(elm).find(".preview_window")[0]], {
                    gutterSize: 15
                });
            }
        });




        // direct init vs stimulus container init
        var showAdminTags = this.$element.data("admin-tags") == true;
        var showLegislatorTags = this.$element.data("legislator-tags") == true;
        var showEventTags = this.$element.find(".email_draft_content").data("event-tags") == true;
        

        $.each(this.$element.find("textarea:not(.plain):not(.text-draft)"), function(i, elm){
            // console.log("da elm...", elm)
            App.utils.initEmailTiny(elm, pixelHeight, showAdminTags, showEventTags, showLegislatorTags);
        })
        

        iFrameResize({
            log: false,
            heightCalculationMethod: 'bodyScroll',
            minHeight: this.options.height,
            // log: true,
            autoResize: true,
        }, this.$element.find('.preview_window iframe')[0]);




       

        this.$element.find(".language-pills li a.language").on("click", function(e) {
           var iframe = $(this).closest(".draft_content").find(".preview_window iframe");
            var urlParams = new URLSearchParams(iframe.attr("src"));
            urlParams.set("language", $(this).data("language"));
            iframe.siblings(".spinner").removeClass("hidden");
            iframe.addClass("hidden");
            iframe.attr("src", decodeURIComponent(urlParams));
        });


        this.$element.find(".draft_content .preview-toggle-button").on("click", function(e) {
            if ($(this).hasClass("mobile-preview")) {
                $(this).closest(".draft_content").find(".preview_window iframe").addClass("mobile-preview");
            } else {
                $(this).closest(".draft_content").find(".preview_window iframe").removeClass("mobile-preview");
            }
        });
        this.$element.find(".draft_content .segmented-control .btn").on("click", function(e) {
            $(this).closest(".segmented-control").find(".btn").removeClass("active");
            $(this).addClass("active");
            if ($(this).parent().hasClass("current-user-status")) {
                var loggedOut = $(this).hasClass("logged-out");
                var iframe = $(this).closest(".draft_content").find(".preview_window iframe");
                var urlParams = new URLSearchParams(iframe.attr("src"));
                urlParams.set("logged_out", loggedOut);
                iframe.attr("src", decodeURIComponent(urlParams));
            }
        });

        this.$element.find(".email_toggle_container a").on("click", function(e) {
            e.preventDefault();
            $(this).closest(".email_draft_content").find("." + $(this).attr("data-class")).removeClass("hidden");
            $(this).remove();
        });


        var that = this;
        function sendEmailTest() {

        
            var container = that.$element.find(".send_email_draft");
            var emails = container.find(".test_email_address").val();




            if(App.utils.validateEmail(emails)){
                var button = that.$element.find(".send_email_test_submit");
                button.button("loading");

                $("#draft-email--invalid-email-error").html("");
                
                $.post("/resources/email/test/send", {
                    email: emails,
                    resource_id: container.data("resource-id"),
                    hash_id: container.data("hash-id"),
                    resource_type: container.data("resource-type"),
                    stage: container.data("stage")
                }, function(resp) {
                    button.button("reset");
                    container.modal("hide");
                    container.find(".test_email_address").val("");
                    $.toast({
                        heading: 'Sent Email',
                        text: "Send test email to " + emails,
                        position: 'bottom-center',
                        stack: false
                    });
                });

            }
            else{
                $("#draft-email--invalid-email-error").html("Please enter a valid email address");
            }


        }

        this.$element.find(".send_email_test_submit").on("click", function(e) {
            e.preventDefault();
            sendEmailTest();
        });

        this.$element.find(".test_email_address").on("keypress", function(e) {
            if (e.which === 13) { // Enter key pressed
                e.preventDefault();
                sendEmailTest();
            }
        });



        this.$element.closest("form").on("ajax:success", function(e) {
            var iframe = $(this).find(".preview_window iframe");
            //Add Spinner, hide iFrame
            iframe.siblings(".spinner").removeClass("hidden");
            iframe.addClass("hidden");
            var iframeElm = iframe[0];
            if(iframeElm){
                iframeElm.src += '';
            }
        });

        this.$element.find(".preview_window iframe").on("load", function(e) {
            $(this).siblings(".spinner").addClass("hidden");
            $(this).removeClass("hidden")
            
            iFrameResize({
                log: false,
                heightCalculationMethod: 'bodyScroll',
                minHeight: pixelHeight
            }, this);


        });


    }


    // EmailDraft PLUGIN DEFINITION
    // ========================

    function Plugin(option) {
        // console.log("plugin this..",this)
        // console.log("plugin, option", option)
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('st.email-draft')
            var options = typeof option == 'object' && option
                // console.log("this....", this)
            if (!data) $this.data('st.email-draft', (data = new EmailDraft(this, options)))
            if (typeof option == 'string' && data[option]) data[option]()
        })
    }

    var old = $.fn.EmailDraft

    $.fn.emailDraft = Plugin
    $.fn.emailDraft.Constructor = EmailDraft

    // EMAILDRAFT NO CONFLICT
    // ==================

    $.fn.emailDraft.noConflict = function() {
        $.fn.emailDraft = old
        return this
    }

}(jQuery);