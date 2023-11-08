import { Controller } from "@hotwired/stimulus"
import * as FilePond from 'filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'

FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
)

export default class extends Controller {
  connect() {
    FilePond.create(this.element, {
      storeAsFile: true,
      allowMultiple: true,
      allowReorder: true,
      acceptedFileTypes: ['image/*']
    })
  }
}