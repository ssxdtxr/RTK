import { User } from "./types";

export const UserCard = ({ user }: { user: User }) => (
  <div className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-4">
        <UserAvatar name={user.name} />
        <UserBasicInfo name={user.name} username={user.username} />
      </div>

      <UserContacts
        email={user.email}
        phone={user.phone}
        website={user.website}
      />
      <UserAddress address={user.address} />
      <UserCompany company={user.company} />
    </div>
  </div>
);

const UserAvatar = ({ name }: { name: string }) => (
  <div className="flex-shrink-0">
    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
      {name.charAt(0)}
    </div>
  </div>
);

const UserBasicInfo = ({
  name,
  username,
}: {
  name: string;
  username: string;
}) => (
  <div>
    <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
    <p className="text-gray-600">@{username}</p>
  </div>
);

const UserContacts = ({
  email,
  phone,
  website,
}: {
  email: string;
  phone: string;
  website: string;
}) => (
  <div className="space-y-2">
    <p className="text-gray-700">
      <span className="font-medium">Email:</span> {email}
    </p>
    <p className="text-gray-700">
      <span className="font-medium">Phone:</span> {phone}
    </p>
    <p className="text-gray-700">
      <span className="font-medium">Website:</span>{" "}
      <a
        href={`https://${website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {website}
      </a>
    </p>
  </div>
);

const UserAddress = ({
  address,
}: {
  address: { street: string; suite: string; city: string; zipcode: string };
}) => (
  <div className="mt-4 pt-4 border-t border-gray-200">
    <h3 className="text-sm font-medium text-gray-500">Address</h3>
    <p className="text-gray-700">
      {address.street}, {address.suite}
      <br />
      {address.city}, {address.zipcode}
    </p>
  </div>
);

const UserCompany = ({
  company,
}: {
  company: { name: string; catchPhrase: string };
}) => (
  <div className="mt-4 pt-4 border-t border-gray-200">
    <h3 className="text-sm font-medium text-gray-500">Company</h3>
    <p className="text-gray-700 font-medium">{company.name}</p>
    <p className="text-gray-600 italic">"{company.catchPhrase}"</p>
  </div>
);
