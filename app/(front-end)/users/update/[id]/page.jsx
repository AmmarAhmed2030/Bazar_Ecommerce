import FormHeader from '@/components/backoffice/FormHeader';
import NewUserForm from '@/components/backoffice/Forms/NewUserForm';
import { getData } from '@/lib/getData';

export default async function UpdateUser({ params: { id } }) {
  const userProfile = await getData(`users/profile/${id}`);
  const user = await getData(`users/${id}`);

  return (
    <div className="px-4">
      <FormHeader title="Update Profile" />
      <NewUserForm updateData={userProfile ? userProfile : {}} user={user} />
    </div>
  );
}
