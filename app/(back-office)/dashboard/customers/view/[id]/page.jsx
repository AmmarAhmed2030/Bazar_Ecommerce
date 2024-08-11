import { convertIsoDateToNormal } from '@/lib/convertIsoDateToNormal';
import { getData } from '@/lib/getData';
import Image from 'next/image';

export default async function CustomerProfile({ params: { id } }) {
  const profile = await getData(`/users/profile/${id}`);
  return (
    <div className="px-4 mx-auto max-w-[325px] xs:max-w-[480px] sm:max-w-[650px] md:max-w-[1000px]  lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-3xl 4xl:max-w-4xl 5xl:max-w-5xl 6xl:max-w-6xl  overflow-auto">
      <div className="bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-50 px-4 rounded-lg">
        <div className="flex items-center mb-6 border-b border-slate-50 py-4 pb-8">
          {profile.profileImage ? (
            <Image
              src={profile.profileImage}
              alt={`${profile.name}'s profile picture`}
              className="w-24 h-24 rounded-full mr-4"
              width={96}
              height={96}
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-slate-500 flex items-center justify-center mr-4">
              <span className="text-2xl px-4">{profile.name.charAt(0)}</span>
            </div>
          )}
          <div>
            <h2 className="text-2xl font-bold px-4">{profile.name}</h2>
            <p className="text-slate-400 px-4">{profile.email}</p>
            {profile.isActive && (
              <span className="bg-lime-500 text-white text-xs px-2 py-1 rounded-full">
                Active
              </span>
            )}
          </div>
        </div>

        <div className="mb-6  border-b border-slate-50 py-4 pb-8">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-2">
            <p>
              <span className="font-bold">Fist Name:</span>{' '}
              {profile.firstName || 'N/A'}
            </p>
            <p>
              <span className="font-bold">Last Name:</span>{' '}
              {profile.lastName || 'N/A'}
            </p>
            <p>
              <span className="font-bold">Phone:</span> {profile.phone || 'N/A'}
            </p>
            <p>
              <span className="font-bold">Username:</span>{' '}
              {profile.username || 'N/A'}
            </p>
            <p>
              <span className="font-bold">Street:</span>{' '}
              {profile.streetAddress || 'N/A'}
            </p>
            <p>
              <span className="font-bold">City:</span> {profile.city || 'N/A'}
            </p>
            <p>
              <span className="font-bold">Country:</span>{' '}
              {profile.country || 'N/A'}
            </p>
            <p>
              <span className="font-bold">District:</span>{' '}
              {profile.district || 'N/A'}
            </p>
          </div>
        </div>
        <div className="mb-6  border-b border-slate-50 py-4 pb-8">
          <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
          <div className="space-y-2">
            <p>
              <span className="font-bold">Date Of Birth:</span>{' '}
              {convertIsoDateToNormal(profile.dateOfBirth) || 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
