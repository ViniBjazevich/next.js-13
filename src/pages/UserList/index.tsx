import React, { useEffect, useState } from "react";
import { URL } from "@/constants";
import axios from "axios";
import { Card, Collapse, Spin, Typography } from "antd";
import { User } from "@/types/user";
import styles from "@/styles/UserList.module.css";

const { Panel } = Collapse;
const { Title } = Typography;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(URL + "api/prisma-routes/user");

      setLoading(false);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {loading && (
        <div className={styles.loadingSpinner}>
          <Spin size="large" />
        </div>
      )}
      {!loading && <Title level={2} className={styles.header}>
        Users:
      </Title>}
      <div className={styles.userListContainer}>
        {users.map((user: User) => (
          <Card
            key={user.id}
            title={
              <UserCardHeader username={user.username} handle={user.handle} />
            }
            // extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div className={styles.userDetail}>
              <span>Email:</span>
              <span>{user.email}</span>
            </div>

            <Collapse className={styles.userAccordion}>
              <Panel header="Following" key="1">
                {user.following.map(({ leader }) => (
                  <p key={leader.id}>{leader.username}</p>
                ))}
              </Panel>
              <Panel header="Followers" key="2">
                {user.followers.map(({ follower }) => (
                  <p key={follower.id}>{follower.username}</p>
                ))}
              </Panel>
              <Panel header="Posts" key="3">
                {user.posts.map((post) => (
                  <p key={post.id}>{post.content}</p>
                ))}
              </Panel>
              <Panel header="Likes" key="4">
                {user.likes.map((like) => (
                  <p key={like.id}>{like.content}</p>
                ))}
              </Panel>
            </Collapse>
          </Card>
        ))}
      </div>
    </>
  );
};

type UserCardHeaderProps = {
  username: string;
  handle: string;
};

const UserCardHeader = ({ username, handle }: UserCardHeaderProps) => {
  return (
    <div className={styles.userCardHeader}>
      <span className={styles.username}>{username}</span>
      <span className={styles.handle}>@{handle}</span>
    </div>
  );
};

export default UserList;
