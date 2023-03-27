export interface postListType {
  idx: number;
  title: string;
  isMine: boolean;
  content: string;
  writer: {
    accountIdx: number;
    name: string;
    isMine: boolean;
  };
  likeCount: number;
  createdDate: string;
}

export interface PostIdType extends postListType {
  comment: [
    {
      id: number;
      isMine: boolean;
      comment: string;
      writer: { name: string; imageUrl: string; id: number };
    }
  ];
}
