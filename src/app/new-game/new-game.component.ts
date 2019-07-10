import { Component, OnInit } from '@angular/core';
import { RollService, IWimpoutDie } from '../services/roll.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: [ './new-game.component.scss' ],
  providers:  [ RollService ]
})
export class NewGameComponent implements OnInit {

    public currentRoll: IWimpoutDie[];
    public previousRolls: IWimpoutDie[][];
    public isNewActive: boolean;
    currentRollScore: number;
    playerPosition: number;
    constructor (private RollService: RollService) {

  }

    ngOnInit() {
        this.currentRoll = this.RollService.initDice();
        this.isNewActive = true;
        this.previousRolls = []
  }

    public onClickRollBtn = (newRoll: boolean) => {
        this.currentRoll = this.RollService.rollDice(newRoll);
        this.RollService.processRoll(this.isNewActive);
        if (this.isNewActive) { this.isNewActive = false;}
    }


    public toggleLock = (dieIdx: number) => {
        if (this.currentRoll[ dieIdx ].locked) {
            this.currentRoll = this.RollService.unlockDie(dieIdx);
        } else {
            this.currentRoll = this.RollService.lockDie(dieIdx);
        }
    }
    public endTurn = () => {
        this.playerPosition += this.currentRollScore;
        this.previousRolls.push(this.currentRoll);
        this.currentRollScore = 0;
        this.isNewActive = true;
    }
}
