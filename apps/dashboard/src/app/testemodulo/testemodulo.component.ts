import {Component, OnInit} from '@angular/core';
import {DictionariesService} from "../../services/dictionaries.service";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'dashboard-testemodulo',
  templateUrl: './testemodulo.component.html',
  styleUrls: ['./testemodulo.component.scss'],
  providers: [DictionariesService]
})
export class TestemoduloComponent implements OnInit{

  dictionaries: any[] = [];

  constructor(private dictionariesService: DictionariesService) {
  }

  ngOnInit(): void {
    this.loadDictionaries()
  }

  loadDictionaries() {
    this.dictionariesService.listDictionaries().subscribe((dictionaries) => {
      this.dictionaries = dictionaries
      console.log(dictionaries)
    });
  }

  createDictionary() {
    const id = uuidv4()

    const dictionary = {
      id
    }
    console.log(dictionary)
  }
}
