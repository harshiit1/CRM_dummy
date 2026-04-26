import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'app-document-list',
  standalone: true,
  templateUrl: './upload-document.html',
  styleUrl: './upload-document.scss',
  imports: [SharedModule],
})
export class UploadDocumentComponent {
  showToast(element: string) {
    console.log(element);
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      this.showToast('File exceeds 50MB limit');
      return;
    }

    this.showToast(`Selected: ${file.name}`);
  }
}
