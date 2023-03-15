export type User = {
  id: string;
  handle: string;
  email: string;
  username: string;
  followers: Follower[];
  following: Leader[];
  posts: Post[];
  likes: Post[];
  chatRooms: ChatRoom[];
};

export type Follower = {
  follower: User;
};

export type Leader = {
  leader: User;
};

export type Post = {
  id: number;
  content: string;
  authorId: string;
};

export type ChatRoom = {
  id: string;
  name: string;
  users: User[];
  messages: Message[];
};

export type Message = {
  id: string;
  chatRoomId: string;
  userId: string;
  content: string;
  date: Date;
};
