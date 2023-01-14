export enum EStatusOptions {
  Created,
  Grooming,
  Ready,
  InProgress,
  Blocked,
  Testing,
  IssueFound,
  NoIssueFound,
  Documentation,
  Done,
  Dropped,
  OnHold,
  ReOpen,
}

export const StatusOptions = {
  [EStatusOptions.Created]: [
    EStatusOptions.Grooming,
    EStatusOptions.OnHold,
    EStatusOptions.Dropped,
  ],
  [EStatusOptions.Grooming]: [
    EStatusOptions.Ready,
    EStatusOptions.OnHold,
    EStatusOptions.Dropped,
  ],
  [EStatusOptions.Ready]: [
    EStatusOptions.InProgress,
    EStatusOptions.Blocked,
    EStatusOptions.OnHold,
    EStatusOptions.Dropped,
  ],
  [EStatusOptions.InProgress]: [
    EStatusOptions.Testing,
    EStatusOptions.Blocked,
    EStatusOptions.OnHold,
    EStatusOptions.Dropped,
  ],
  [EStatusOptions.Blocked]: [
    EStatusOptions.InProgress,
    EStatusOptions.Testing,
    EStatusOptions.Documentation,
    EStatusOptions.OnHold,
    EStatusOptions.Dropped,
  ],
  [EStatusOptions.Testing]: [
    EStatusOptions.IssueFound,
    EStatusOptions.NoIssueFound,
    EStatusOptions.Blocked,
    EStatusOptions.OnHold,
    EStatusOptions.Dropped,
  ],
  [EStatusOptions.IssueFound]: [
    EStatusOptions.InProgress,
    EStatusOptions.OnHold,
    EStatusOptions.Dropped,
  ],
  [EStatusOptions.NoIssueFound]: [
    EStatusOptions.Documentation,
    EStatusOptions.OnHold,
    EStatusOptions.Dropped,
  ],
  [EStatusOptions.Documentation]: [
    EStatusOptions.Done,
    EStatusOptions.OnHold,
    EStatusOptions.Dropped,
  ],
  [EStatusOptions.Done]: [EStatusOptions.ReOpen],
  [EStatusOptions.Dropped]: [EStatusOptions.ReOpen],
  [EStatusOptions.ReOpen]: [EStatusOptions.Grooming],
};
