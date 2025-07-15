import ProfileCard from "./ProfileCard";

export default function ProfileContainer() {
  return (
    <div>
      <ProfileCard name="Alex" age= "25" bio="A software engineer who loves hiking."/>
      <ProfileCard name="Taylor" age= "30"bio="A designer passionate about photography."/>
      <ProfileCard name="Guendolen" age= "49"bio="A network administrator who just learned to waterski."/>
      <ProfileCard name="Dexter" age= "22"bio="An underpaid intern who takes copious notes."/>
    </div>
  );
}
