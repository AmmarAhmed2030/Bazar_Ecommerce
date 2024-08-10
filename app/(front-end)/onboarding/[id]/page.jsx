import StepForm from '@/components/Onboarding/StepForm';
import Steps from '@/components/Onboarding/Steps';
import { getData } from '@/lib/getData';

export default async function page({ params: { id } }) {
  const user = await getData(`users/${id}`);
  const steps = [
    {
      number: 1,
      title: 'Basic Information',
    },
    {
      number: 2,
      title: 'Farm Details',
    },
    {
      number: 3,
      title: 'Additional Information',
    },
    {
      number: 4,
      title: 'Summary',
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto my-6 bg-white border border-slate-700 dark:bg-slate-950 p-6 rounded-lg">
        <Steps steps={steps} />
        <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <StepForm farmerId={id} user={user} />
        </div>
      </div>
    </div>
  );
}
