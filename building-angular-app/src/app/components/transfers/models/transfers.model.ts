export type MCTransfer = {
    firstName: string;
    lastName: string;
    email: string;
    id?: number;
    curPosition?: string;
    reqPosition?: string;
    curTeamStatus: {
      approvalStatus: boolean;
      approvedDate: string;
    };
    hrStatus: {
      approvalStatus: boolean;
      approvedDate: string;
    };
    reqTransferTeamStatus: {
      approvalStatus: boolean;
      approvedDate: string;
    };
};


export class MTransfer {
    private transferList: MCTransfer[] = []
    private defaultData: MCTransfer = {
        firstName: '',
        lastName: '',
        email: '',
        curPosition: '',
        reqPosition: '',
        curTeamStatus: {
        approvalStatus: false,
        approvedDate: '',
        },
        hrStatus: {
        approvalStatus: false,
        approvedDate: '',
        },
        reqTransferTeamStatus: {
        approvalStatus: false,
        approvedDate: '',
        },
    };
    private transferInfo: MCTransfer | null = null

    getTransferList() {
        return this.transferList
    }

    getTransferInfo() {
        return this.transferInfo
    }

    addDataToList(data: any) {
        if (this.transferList.length === 0) {
            this.transferList = data
        }
    }

    selectedTransferInfo(data: MCTransfer) {
        this.transferInfo = data
    }
}
