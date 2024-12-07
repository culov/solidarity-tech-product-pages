$(function(){



      $(".property_modal #label").keyup(function(){
          $("#internal_name").val(
            slugify($(this).val())
          );
      })

     $(".property_modal #internal_name").keyup(function(){
          $(this).val(
            slugify($(this).val())
          );
      });


      // var el = document.getElementById('radio_sortable_list');

      $.each($(".sortable_list"), function(i, elm){
        sortable(elm, { forcePlaceholderSize: true, handle: '.grip_handler'});


      });


      $(document).on("change", "select#field_type", function(e){
      
        console.log("da val", $(this).val())
        if($(this).val()=="checkbox"){
          $("#select-reveal--single-checkbox input").attr("disabled", null)
        }
        else{
          $("#select-reveal--single-checkbox input").attr("disabled", true)
        }

      
        // $(".subsections .active.subsection").removeClass("active");
        // $(".subsections .subsection."+$(this).val()).addClass("active");

      });



      $(document).on("click", ".property .add_batch_options", function(e){
        e.preventDefault();

        sortable('.sortable_list', 'reload')
      });


      $(document).on("click", ".cancel-add-bulk-options", function(e){
        e.preventDefault();
        $(".subsection.active .add_batch_options").click();
      });




      $(document).on("click", ".add-options-in-batch", function(e){
        var text = $(this).closest(".tippy-content").find("textarea").val();
        var lines = text.split(/\n/);
        // console.log("lines: " , lines)


        $.each(lines, function(i, line){
          var newOption = $($("#option_template")[0].innerHTML);
          var random = App.utils.random(8);
          newOption.find("input[type='hidden']").val(random);
          newOption.find(".sortable-option-input").val(line)


            $.each(newOption.find(".nav.nav-pills li a"), function(i, a){
              var newId = random+"_"+$(a).attr("data-lang");
              $(a).attr("href", newId)
            })
             $.each(newOption.find(".tab-content div.tab-pane"), function(i, a){
              var newId = random+"_"+$(a).attr("data-lang");
              $(a).attr("id", newId)
            })



          $(".subsection .sortable_list").append(newOption);

        });


        sortable('.sortable_list', 'reload');
        $(".add_batch_options").click();

      });


      $(document).on("click", ".property .add_option", function(e){
        e.preventDefault();

        var list = $(this).closest(".subsection");
        var newOption = $($("#option_template")[0].innerHTML);
        var random = App.utils.random(8);
        newOption.find("input[type='hidden']").val(random);
        
        $.each(newOption.find(".nav.nav-pills li a"), function(i, a){
          var newId = random+"_"+$(a).attr("data-lang");
          $(a).attr("href", newId)
        })
         $.each(newOption.find(".tab-content div.tab-pane"), function(i, a){
          var newId = random+"_"+$(a).attr("data-lang");
          $(a).attr("id", newId)
        })


        list.find(".sortable_list").append(newOption);
        sortable('.sortable_list', 'reload');


      });


      $(document).on("click", ".property .fa-trash", function(e){
        var optionRow = $(this).closest(".option_row")
          bootbox.confirm({
              title: "Warning: Irreversible Action",
              message: "<p>Are you sure you want to delete this option?</p> <ul> <li>This will permanently invalidate and erase data for users with this option.</li> <li>This action cannot be undone after deleting and then saving the property.</li></ul><div>You will still have to click the 'Save Property' button for the deletion to go into effect.</div>",
              centerVertical: true,
              buttons: {
                  confirm: {
                      label: 'Remove Option',
                      className: 'btn-danger'
                  },
                  cancel: {
                      label: 'Cancel',
                      className: 'btn-default'
                  }
              },
              callback: function (result) {
                optionRow.remove();
              }
          });

        


      });



      $("#property_container select").change();



});