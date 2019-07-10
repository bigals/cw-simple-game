import { Injectable } from '@angular/core';

export type IWimpoutValueWhite = 0 | 2 | 3 | 4 | 5 | 6 | 10; // 0 used for initalize
export type IWimpoutValueBlack = 0 | 2 | 'sun' | 4 | 5 | 6 | 10; // 0 used for initalize
export interface IWimpoutDie {
  value: IWimpoutValueWhite | IWimpoutValueBlack;
  locked: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class RollService {
    protected freshDice: IWimpoutDie[] = [
        { value: 0, locked: false },
        { value: 0, locked: false },
        { value: 0, locked: false },
        { value: 0, locked: false },
        { value: 0, locked: false }
    ];
    private dice: IWimpoutDie[];

    constructor () {
        this.dice = this.freshDice;
    }

    private getNewDieValue = (index: number): IWimpoutValueWhite | IWimpoutValueBlack => {
        if (index !== 4) {
            const num: any = Math.floor(Math.random() * 9) + 2;
            return num === 1 || num === 7 || num === 8 || num === 9
              ? this.getNewDieValue(index)
              : num;
        } else { //black die is last index, replace the 3 with the sun
            const num: any = Math.floor(Math.random() * 9) + 2;
            return (num === 3) ? 'sun' : ((num === 1 || num === 7 || num === 8 || num === 9) ? this.getNewDieValue(index) : num);
      }
  };

    public initDice = (): IWimpoutDie[] => {
        return this.freshDice;
    }

  public lockDie = (dieIndex: number): IWimpoutDie[] => {
      this.dice[ dieIndex ].locked = true;
      return this.dice;
  };

  public unlockDie = (dieIndex: number): IWimpoutDie[] => {
      this.dice[ dieIndex ].locked = false;
      return this.dice;
  }

  public rollDice = (newRoll?: boolean): IWimpoutDie[] => {
    if (newRoll) { this.dice = this.freshDice; }

    for (let i = 0; i < this.dice.length; i++) {
      if (!this.dice[i].locked) { this.dice[i].value = this.getNewDieValue(i); }
    }
    return this.dice;
  }

    public processRoll = (isFirstRoll: boolean) => {
        if (this.isSupernova()) {
            // supernova player looses game
            return 'supernova';
        } else if (this.isCloseSuper()) {
            // all tens on white dies, black sun to a 5
            return 'closeSuper';
        } else if (this.isWimpout()) {
            if (isFirstRoll) {
                // trainwreck next players turn
                return 'trainwreck';
            }
            // wimpout next players turn
            return 'wimpout';
        } else {
            //valid roll, player chooses locks
            return 'valid';
        }
    }

    private isSupernova = () => {
        return this.dice[ 0 ].value === 10 &&
            this.dice[ 1 ].value === 10 &&
            this.dice[ 2 ].value === 10 &&
            this.dice[ 3 ].value === 10 &&
            this.dice[ 4 ].value === 10;
    }

    private isCloseSuper = () => {
        return this.dice[ 0 ].value === 10 &&
            this.dice[ 1 ].value === 10 &&
            this.dice[ 2 ].value === 10 &&
            this.dice[ 3 ].value === 10 &&
            (this.dice[ 4 ].value === 5 || this.dice[ 4 ].value === 'sun');
    }

    private isWimpout = () => {
        return this.noNumberedDice() || this.isNoFlash();
    }

    private noNumberedDice = () => {
        return this.dice[ 0 ].value !== 10 && this.dice[ 0 ].value !== 5 &&
            this.dice[ 1 ].value !== 10 && this.dice[ 1 ].value !== 5 &&
            this.dice[ 2 ].value !== 10 && this.dice[ 2 ].value !== 5 &&
            this.dice[ 3 ].value !== 10 && this.dice[ 3 ].value !== 5 &&
            this.dice[ 4 ].value !== 10 && this.dice[ 4 ].value !== 5 && this.dice[ 4 ].value !== 'sun';
    }

    private isNoFlash = () => {
        // let rtnVal = false;
        // for (let i = 0; i < this.dice.length; i++) {
        //     ;;
        // }
    }
}
