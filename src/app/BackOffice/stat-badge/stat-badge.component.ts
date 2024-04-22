import { PlatService } from 'src/app/services/plat.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-stat-badge',
  templateUrl: './stat-badge.component.html',
  styleUrls: ['./stat-badge.component.css']
})
export class StatBadgeComponent {
  chefStats: any = {};

  constructor(private service: PlatService) {}

  ngOnInit() {
    this.getChefStats();
  }

  getChefStats(): void {
    this.service.getChefStats().subscribe((data: any) => {
      this.chefStats = data;
      this.createChart();
    });
  }

  createChart(): void {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d'); // Utilisez l'opérateur de navigation sécurisé pour vérifier si ctx est null

    if (!ctx) {
      console.error('Impossible de récupérer le contexte de rendu du canevas.');
      return;
    }

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Gold', 'Silver', 'Bronze'],
        datasets: [{
          label: 'nombre de badge',
          data: [
            this.chefStats.GOLD || 0,
            this.chefStats.SILVER || 0,
            this.chefStats.BRONZE || 0
          ],
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(192, 192, 192, 0.2)',
            'rgba(205, 127, 50, 0.2)'
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(192, 192, 192, 1)',
            'rgba(205, 127, 50, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
