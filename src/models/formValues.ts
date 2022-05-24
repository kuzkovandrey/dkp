export interface FormValues {
  title: string;
  fields: {
    name: string;
    placeholder: string;
    isFullWidth?: boolean;
    isRequired?: boolean;
  }[];
}
