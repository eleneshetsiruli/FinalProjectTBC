export interface IFormInput {
  email: string;
  question: string;
}

export interface ContentBoxItem {
  label: string;
  result: string;
}

export interface ContentBoxProps {
  title: string;
  contentItems: ContentBoxItem[];
}
