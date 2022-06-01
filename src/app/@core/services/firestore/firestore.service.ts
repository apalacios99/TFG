import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Sensor} from "../../interfaces/sensor";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private dbPath = '/dispositivos';
  private collection: AngularFirestoreCollection<Sensor>;

  constructor(private angularFirestore: AngularFirestore) {
  }

  getSensorData(date): AngularFirestoreCollection {
    this.collection = this.angularFirestore.collection(this.dbPath + '/CO2/mediciones',
      ref => ref.where('fechaHora', '>=', date + 'Z').orderBy('fechaHora', 'asc'));
    return this.collection;
  }
}
