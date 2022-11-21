export interface ReportItem {
  answer: string;
  title: string;
  type: string;
  value: number;
}

export type Report = Record<string, ReportItem>;
