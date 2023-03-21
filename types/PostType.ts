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
  images: string[];
  createdDate: string;
}

export interface PostIdType extends postListType {
  comments: [
    {
      id: number;
      isMine: boolean;
      comment: string;
      user: { name: string; imageUrl: string; id: number };
    }
  ];
}
