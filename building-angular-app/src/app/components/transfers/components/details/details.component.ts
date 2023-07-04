import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferService } from '../../services/transfer.service';
import { MCTransfer } from '../../models/transfers.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  selectedEmployee: MCTransfer | null = this._transferService.getTransferInfo()

  constructor(private readonly _transferService: TransferService) {}
}
