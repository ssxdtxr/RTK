import { Error } from "../../shared/ui/Error";
import { Loading } from "../../shared/ui/Loading";
import { useGetUsersQuery } from "./api/api";
import { UserCard } from "./user-card";

export const UsersList = () => {
  const { data: users, isLoading, error } = useGetUsersQuery({});

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error text="Error loading users!" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Users List
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
