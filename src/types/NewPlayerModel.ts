namespace TR {


  export interface NewPlayerModel {
    index: number;
    name: string;
    color: Color;
    beginner: boolean;
    handicap?: number;
    first?: boolean;
    last?: boolean;
  }
}
