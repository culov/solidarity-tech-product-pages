import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "container" ]

  open(event) {
    event.preventDefault();
    this.containerTarget.style.display = "block";
  }

  close(event) {
    event.preventDefault();
    this.containerTarget.style.display = "none";
    var iframe = this.containerTarget.querySelector("iframe");
    var src = iframe.src;
    iframe.src = '';
    iframe.src = src;
  }

  connect() {
  }

  // Prevents modal from closing when clicking inside the modal content
  contentClick(event) {
    event.stopPropagation();
  }
}