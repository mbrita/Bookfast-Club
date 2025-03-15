import { useUsers } from '../../shared/api/userApi';

export const UserList = () => {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  return (
    <ul>
      {users.map((user: { id: number; name: string }) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
