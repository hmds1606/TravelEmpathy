export interface IProductQuestionListPresenterProps {
  data: any;
  onClickDelete: (event: any) => Promise<void>;
  loadFunc: () => void;
}
