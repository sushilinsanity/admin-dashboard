import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChartComponent } from './widgets/chart/chart.component';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';

// material imports
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent, ChartComponent, DashboardTableComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [SidebarComponent, HeaderComponent, FooterComponent, ChartComponent, DashboardTableComponent]
})
export class SharedModule { }
