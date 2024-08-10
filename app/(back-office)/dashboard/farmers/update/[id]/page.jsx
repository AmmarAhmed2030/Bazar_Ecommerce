import FormHeader from '@/components/backoffice/FormHeader';
import NewFarmerForm from '@/components/backoffice/Forms/NewFarmerForm';
import { getData } from '@/lib/getData';

export default async function UpdateFarmer({ params: { id } }) {
  const farmerProfile = await getData(`farmers/${id}`);
  const user = await getData(`users/${id}`);

  return (
    <div>
      <FormHeader title="Update Farmer" />
      <NewFarmerForm
        updateData={farmerProfile ? farmerProfile : {}}
        user={user}
      />
    </div>
  );
}
