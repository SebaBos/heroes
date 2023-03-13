import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "./hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', iq: 125 },
      { id: 13, name: 'Bombasto', iq: 80 },
      { id: 14, name: 'Celeritas', iq: 130 },
      { id: 15, name: 'Magneta', iq: 105 },
      { id: 16, name: 'RubberMan', iq: 90 },
      { id: 17, name: 'Dynama', iq: 100 },
      { id: 18, name: 'Dr. IQ', iq: 169 },
      { id: 19, name: 'Magma', iq: 95 },
      { id: 20, name: 'Tornado', iq: 145 },
      { id: 21, name: 'Cold', iq: 150 },
      { id: 22, name: 'The Rock', iq: 117 },
      { id: 23, name: 'Ice', iq: 109 },
      { id: 24, name: 'Volcano', iq: 77 },
      { id: 25, name: 'Hurricane', iq: 134 },
      { id: 26, name: 'Gamma', iq: 121 }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
