import { Controller } from "@hotwired/stimulus"
import * as FilePond from 'filepond';

export default class extends Controller {
    connect() {
        FilePond.create(this.element)
    }
}