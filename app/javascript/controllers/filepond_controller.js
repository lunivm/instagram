import { Controller } from "@hotwired/stimulus"
import * as FilePond from 'filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

FilePond.registerPlugin(FilePondPluginImagePreview)

export default class extends Controller {
  connect() {
    FilePond.create(this.element, {
      storeAsFile: true,
      allowMultiple: true,
      allowReorder: true
    })
  }
}