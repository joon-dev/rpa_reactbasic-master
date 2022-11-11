import { useSession } from '../hooks/session-context';

// export const Profile = ({ session, logout }) => {
export const Profile = () => {
  const { session, logout } = useSession();
  return (
    <>
      <h2>
        Profile of {session.loginUser.name} ({session.loginUser.id})
      </h2>
      <button onClick={logout}>로그아웃</button>
    </>
  );
};
