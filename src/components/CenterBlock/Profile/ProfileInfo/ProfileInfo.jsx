import {
    ContactItem,
    ContactsSection,
    ProfileContainer,
    ProfileImage,
    ProfileSection,
} from "./PIStyledComponents";

import React from "react";
import StatusProfileContainer from "./StatusProfile/StatusProfileContainer";
import userNotPhoto from "../../../../assets/149071.png";

const ProfileInfo = ({dataEntireUser}) => {
    console.log(dataEntireUser);

    return (
        <>
            {dataEntireUser && <ProfileContainer>
                <ProfileSection>
                    <h1>User Profile</h1>
                    <ProfileImage
                        src={
                            dataEntireUser.photos.large
                                ? dataEntireUser.photos.large
                                : userNotPhoto
                        }
                        alt="User Photo"
                    />
                    <div>Full Name: {dataEntireUser.fullName} </div>
                    <div>
                        About Me:
                        {dataEntireUser.aboutMe ? dataEntireUser.aboutMe : "No"}
                    </div>
                    <div>
                        Looking for a Job:
                        {dataEntireUser.lookingForAJob ? "Yes" : "No"}{" "}
                    </div>
                    <div>
                        Looking for a Job Description:
                        {dataEntireUser.lookingForAJobDescription
                            ? dataEntireUser.lookingForAJobDescription
                            : "No"}
                    </div>
                    <ContactItem>
                        <StatusProfileContainer/>
                    </ContactItem>
                </ProfileSection>
                <ContactsSection>
                    <div>Contacts:</div>
                    <ContactItem>
                        Facebook:
                        {dataEntireUser.contacts.facebook
                            ? dataEntireUser.contacts.facebook
                            : "No"}
                    </ContactItem>
                    <ContactItem>
                        Website:
                        {dataEntireUser.contacts.website
                            ? dataEntireUser.contacts.website
                            : "No"}
                    </ContactItem>
                    <ContactItem>
                        vk:
                        {dataEntireUser.contacts.vk
                            ? dataEntireUser.contacts.vk
                            : "No"}
                    </ContactItem>
                    <ContactItem>
                        twitter:
                        {dataEntireUser.contacts.twitter
                            ? dataEntireUser.contacts.twitter
                            : "No"}
                    </ContactItem>
                    <ContactItem>
                        instagram:
                        {dataEntireUser.contacts.instagram
                            ? dataEntireUser.contacts.instagram
                            : "No"}
                    </ContactItem>
                    <ContactItem>
                        youtube:
                        {dataEntireUser.contacts.youtube
                            ? dataEntireUser.contacts.youtube
                            : "No"}
                    </ContactItem>
                    <ContactItem>
                        github:
                        {dataEntireUser.contacts.github
                            ? dataEntireUser.contacts.github
                            : "No"}
                    </ContactItem>
                    <ContactItem>
                        mainLink:
                        {dataEntireUser.contacts.mainLink
                            ? dataEntireUser.contacts.mainLink
                            : "No"}
                    </ContactItem>
                </ContactsSection>
            </ProfileContainer>}

        </>
    );
};

export default ProfileInfo;
