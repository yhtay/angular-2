import { Injectable } from '@angular/core';
import { MCTransfer, MTransfer } from '../models/transfers.model';
import { BehaviorSubject } from 'rxjs';
import { employee } from './transfer.mockData';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private transferData: MTransfer = new MTransfer()
  private bsTransferData$ = new BehaviorSubject<MTransfer | null>(null);
  readonly transferData$ = this.bsTransferData$.asObservable();


  constructor() { }

  getTransferData() {
    return this.transferData.getTransferList()
  }

  getTransferInfo() {
    return this.transferData.getTransferInfo()
  }

  initialLoadData() {
    this.transferData.addDataToList(employee)
    this.bsTransferData$.next(this.transferData)
  }

  onDataSelected(data: MCTransfer) {
    this.transferData.selectedTransferInfo(data)
    this.bsTransferData$.next(this.transferData)
  }
}
