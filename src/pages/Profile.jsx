import React from 'react';
import ProfileOverview from '../components/profile/ProfileOverview';
import EditProfileForm from '../components/profile/EditProfileForm';
import SecuritySettings from '../components/profile/SecuritySettings';
import SessionInfo from '../components/profile/SessionInfo';
import DangerZone from '../components/profile/DangerZone';
import DashboardHeader from '../components/dashboard/DashboardHeader'; // Reusing header for consistency

const Profile = () => {
  return (
    <div className="max-w-6xl mx-auto w-full pb-10">
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-muted-foreground">Manage your profile, security, and session preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Column: Overview (30%) */}
        <div className="w-full md:w-[320px] shrink-0 space-y-6">
            <ProfileOverview />
            {/* Could add other sidebar widgets here */}
        </div>

        {/* Right Column: Settings (70%) */}
        <div className="flex-1 space-y-8 w-full min-w-0">
            <section>
                <EditProfileForm />
            </section>
            
            <section>
                <SecuritySettings />
            </section>

            <section>
                <SessionInfo />
            </section>

            <section>
               <DangerZone />
            </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
