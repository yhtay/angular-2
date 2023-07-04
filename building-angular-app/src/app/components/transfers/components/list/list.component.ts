import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferService } from '../../services/transfer.service';
import { Router } from '@angular/router';
import { MCTransfer } from '../../models/transfers.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  transferList!: MCTransfer[];

  constructor (
    private readonly _transferService: TransferService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._transferService.initialLoadData()
    this._transferService.transferData$.subscribe((data: any) => {
      this.transferList = data.transferList
    })
  }

  onEdit(data: MCTransfer) {
    this._transferService.onDataSelected(data)
    this._router.navigate(['transfers/details'])
  }
}
