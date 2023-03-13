import {OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.css']
})
export class HeroesTableComponent implements OnInit {
  heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name', 'iq'];

  heroesLength: number = 0;
  dataSource: MatTableDataSource<Hero> = new MatTableDataSource();
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        this.dataSource = new MatTableDataSource(heroes);
        this.heroesLength = heroes.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

}


