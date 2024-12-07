import {
    Controller
} from "stimulus";
import { Dropzone } from "dropzone";


export default class extends Controller {
    static targets = [];
    static values = {imageUrl: String}
    connect(){
        var self = this;
        window.dropzone = this.dropzone = new Dropzone(this.element, { 
                url: "/onboarding/3/upload-image", 
                acceptedFiles:".jpeg,.jpg,.png,.gif,image/*",
                maxFiles: 1,
                maxFilesize: 1000000,
                resizeHeight: 400,
                 // addRemoveLinks: true,
                // clickable: false,
                init: function() {
                    self.setupDragon(this);
                    this.on("sending", function(file, xhr, formData){

                        var csrf_token = $('meta[name="csrf-token"]').attr('content');
                        formData.append("authenticity_token", csrf_token);
                        $(self.element).closest(".uploader").addClass("with-image");


                      });
                },

            });

        if(this.hasImageUrlValue){
            let mockFile = {id:1, name: "Filename", size: 12345 };
            this.dropzone.files.push(mockFile);
            this.dropzone.displayExistingFile(mockFile, this.imageUrlValue, null, null, false);
        }
             


        this.dropzone.on("addedfiles", function(files) {

            if(self.dropzone.files.length > 1){
                self.dropzone.removeFile(self.dropzone.files[0]);
            }
          
             // $(".dz-image").remove()
        });
      
    }
    open(e){
      this.dropzone.hiddenFileInput.click();
    }
    setupDragon(uploader) {
    /* A little closure for handling proper 
       drag and drop hover behavior */
    var dragon = (function (elm) {
      var dragCounter = 0;

      return {
        enter: function (event) {
          event.preventDefault();
          dragCounter++;
          elm.classList.add('dz-drag-hover')
        },
        leave: function (event) {
          dragCounter--;
          if (dragCounter === 0) {
            elm.classList.remove('dz-drag-hover')
          }
        }
      }
    })(uploader.element);

    uploader.on('dragenter', dragon.enter);
    uploader.on('dragleave', dragon.leave);
}

}