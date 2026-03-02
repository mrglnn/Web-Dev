import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../album.service';
import { switchMap, map } from 'rxjs';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <section *ngIf="!loading">
      <h2>Album {{ album?.id }}</h2>
      <p><strong>User:</strong> {{ album?.userId }}</p>

      <label>
        Title:
        <input [(ngModel)]="title" />
      </label>

      <div style="margin-top:12px">
        <button (click)="save()" [disabled]="saving">Save</button>
        <a [routerLink]="['/albums', album?.id, 'photos']" style="margin-left:12px">View Photos</a>
        <button (click)="back()" style="margin-left:12px">Back</button>
      </div>
    </section>

    <div *ngIf="loading">Loading album…</div>
  `,
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  title = '';
  loading = true;
  saving = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map((pm) => Number(pm.get('id'))), switchMap((id) => this.albumService.getAlbum(id)))
      .subscribe({
        next: (a) => {
          this.album = a;
          this.title = a.title;
          this.loading = false;
        },
        error: () => (this.loading = false),
      });
  }

  save(): void {
    if (!this.album) return;
    this.saving = true;
    const updated: Album = { ...this.album, title: this.title };
    this.albumService.updateAlbum(updated).subscribe({
      next: (a) => {
        this.album = a;
        this.title = a.title;
        this.saving = false;
      },
      error: () => {
        this.saving = false;
        alert('Failed to save album');
      },
    });
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}
