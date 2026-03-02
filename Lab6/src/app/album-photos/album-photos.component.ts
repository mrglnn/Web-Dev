import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { switchMap, map } from 'rxjs';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2>Photos for Album {{ albumId }}</h2>

      <div *ngIf="loading">Loading photos…</div>

      <div *ngIf="!loading">
        <div *ngIf="photos.length; else noPhotos">
          <ul class="photos-list">
            <li *ngFor="let p of photos">
              <img [src]="p.thumbnailUrl || p.url" [alt]="p.title" />
              <div class="caption">{{ p.title }}</div>
            </li>
          </ul>
        </div>
      </div>

      <ng-template #noPhotos><p>No photos found for this album.</p></ng-template>

      <div style="margin-top:12px">
        <button (click)="back()">Back to album</button>
      </div>
    </section>
  `,
  styles: [
    `
      .photos-list { list-style:none; padding:0; display:flex; flex-wrap:wrap; gap:12px }
      .photos-list li { width:120px; display:flex; flex-direction:column; align-items:center }
      .photos-list img { width:100px; height:100px; object-fit:cover; border-radius:6px }
      .caption { font-size:0.8rem; text-align:center; margin-top:6px }
    `,
  ],
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId!: number;
  loading = true;

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map((pm) => Number(pm.get('id'))), switchMap((id) => {
        this.albumId = id;
        return this.albumService.getAlbumPhotos(id);
      }))
      .subscribe({
        next: (p) => {
          this.photos = p;
          this.loading = false;
        },
        error: () => (this.loading = false),
      });
  }

  back(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
