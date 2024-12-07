
(function () {

    const uploaderClass = 'uploader'

    const getUploaders = () => document.getElementsByClassName(uploaderClass)

    const uploaders = getUploaders()

    for(let i = 0; i < uploaders.length; i++) {
        const uploader = uploaders[i]
        if(!uploader.dataset.init) {
            const field = uploader.querySelector('.uploader__field')

            const preventDefaults = (event) => {
                event.preventDefault();
                event.stopPropagation();
            }

            const highlight = () => {
                uploader.classList.add('uploader--drag-over');
            }

            const unhighlight = () => {
                uploader.classList.remove('uploader--drag-over');
            }

            const handleDrop = (event) => {
                const files = event.dataTransfer.files;
                field.files = files;
            }

            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                uploader.addEventListener(eventName, preventDefaults, false);
            });

            ['dragenter', 'dragover'].forEach(eventName => {
                uploader.addEventListener(eventName, highlight, false);
            });

            ['dragleave', 'drop'].forEach(eventName => {
                uploader.addEventListener(eventName, unhighlight, false);
            });

            uploader.addEventListener('drop', handleDrop, false);

            uploader.dataset.init = true
        }
    }

})()