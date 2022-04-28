import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {SensorData} from "../../interfaces/sensor-data";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private dbPath = '/dispositivos';
  private collection: AngularFirestoreCollection<SensorData>;

  constructor(private angularFirestore: AngularFirestore) {
  }

  getSensorData(date): AngularFirestoreCollection {
    this.collection = this.angularFirestore.collection(this.dbPath + '/CO2/mediciones',
      ref => ref.where('fechaHora', '>=', date + 'Z'));
    return this.collection;
  }
}
