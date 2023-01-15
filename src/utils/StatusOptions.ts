import { invert } from "lodash";

export function getStatusOptions(status: string): string[] {
  // status options
  const SO: { [key: string]: string } = {
    CRE: "Created",
    GRO: "Grooming",
    RDY: "Ready",

    IP: "InProgress",
    TE: "Testing",
    IF: "IssueFound",
    NIF: "NoIssueFound",

    DOC: "Documentation",
    DN: "Done",

    BL: "Blocked",
    DRP: "Dropped",
    OH: "OnHold",
    REO: "ReOpen",
  };

  // TODO apply useMemo here
  const inverted = invert(SO);

  const status_next_options: any = {
    CRE: [SO.CRE, SO.OH, SO.DRP],
    CRO: [SO.RDY, SO.OH, SO.DRP],
    RDY: [SO.IP, SO.BL, SO.OH, SO.DRP],

    IP: [SO.TE, SO.BL, SO.OH, SO.DRP],
    TE: [SO.IF, SO.NIF, SO.BL, SO.OH, SO.DRP],
    IF: [SO.IP, SO.OH, SO.DRP],
    INF: [SO.DOC, SO.BL, SO.OH, SO.DRP],

    BL: [SO.IP, SO.TE, SO.DOC, SO.OH, SO.DRP],
    DN: [SO.REO],
    DRP: [SO.REO],
    REO: [SO.GRO],
  };

  const short_form: string = inverted[status];
  return status_next_options[short_form];
}
