export interface IBoardDetailPagePresenterProps {
  data: {
    fetchBoard: {
      writer: string;
      createdAt: string;
      title: string;
      images: any;
      contents: string;
      youtubeUrl: string;
      likeCount: number;
      dislikeCount: number;
      boardAddress: {
        address: string;
        addressDetail: string;
      };
    };
  };
  onClickList: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
