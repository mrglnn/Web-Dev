import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <h2>Albums</h2>

      <div *ngIf="loading">Loading albums…</div>

      <ul *ngIf="!loading">
        <li *ngFor="let album of albums" class="album-item">
          <a [routerLink]="['/albums', album.id]">{{ album.id }} - {{ album.title }}</a>
          <button (click)="delete(album.id)" class="delete">Delete</button>
        </li>
      </ul>
    </section>
  `,
  styles: [
    `
      .album-item { display:flex; gap:12px; align-items:center; margin:6px 0 }
      .delete { margin-left:auto }
    `,
  ],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = false;

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  private loadAlbums(): void {
    this.loading = true;
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  delete(id: number): void {
    if (!confirm('Delete album #' + id + '?')) return;
    this.albumService.deleteAlbum(id).subscribe({
      next: () => (this.albums = this.albums.filter((a) => a.id !== id)),
      error: () => alert('Failed to delete album'),
    });
  }
}
