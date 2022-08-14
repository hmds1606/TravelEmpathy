import { ApolloQueryResult } from "@apollo/client";

export interface IProductAnswerListPresenterProps {
  answerData: any;
  onClickDelete: (event: any) => Promise<void>;
  refetch: (
    variables?:
      | Partial<{
          useditemQuestionId: any;
        }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>;
}
