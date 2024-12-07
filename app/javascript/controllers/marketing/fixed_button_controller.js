import { Controller} from "stimulus";
export default class extends Controller {
    static targets = [ ]
    static values = {}
    connect() {
	    window.addEventListener('DOMContentLoaded', function() {
	      var button = document.getElementById('footer--fixed-button');
	      var landingSignupButton = document.getElementById('signup-button');


	      if(button != null){
		      var observer = new IntersectionObserver(function(entries) {
		        entries.forEach(function(entry) {
		          if (entry.isIntersecting) {
		            button.classList.add("footer--hide")
		          } else {
		            button.classList.remove("footer--hide")
		          }
		        });
		      });
		      observer.observe(landingSignupButton);
		  }

	    });
	}
}