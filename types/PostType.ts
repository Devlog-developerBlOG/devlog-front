export interface PostIdType {
    idx: number,
	isMine : boolean,
    title: string,
    content: string,
    tags: string[],
    writer: {
        accountIdx: number,
        name: string
    },
	comments: [
        {
            id: number,
            isMine: boolean,
            comment: string,
            user: {name: string, imageUrl: string, id: number}
        }
      ],
    imageUrl: string[],
  }