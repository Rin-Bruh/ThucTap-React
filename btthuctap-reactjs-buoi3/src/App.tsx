import './App.css'
import DangerButton from './components/Buttons/DangerButton.tsx';
import PrimaryButton from './components/Buttons/PrimaryButton.tsx';
import SecondaryButton from './components/Buttons/SecondaryButton.tsx';
import Gallery from './components/Gallery/Gallery.tsx';
import HelloWorld from './components/HelloWorld/HelloWorld.tsx';
import StaticCard from './components/StaticCard/StaticCard.tsx';
import Welcome from './components/Welcome/Welcome.tsx';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.tsx';
import ProfileCard from './components/ProfileCard/ProfileCard.tsx';
import FeatureList from './components/FeatureList/FeatureList.tsx';
import StaticArticle from './components/StaticArticle/StaticArticle.tsx';
import DashboardLayout from './components/DashboardLayout/DashboardLayout.tsx';


function App() {

  return (
    <DashboardLayout>
      <Welcome />
      <LoadingSpinner />
      <HelloWorld />
      <div className="button-container">
        <PrimaryButton />
        <SecondaryButton />
        <DangerButton />
      </div>
      <h2>Static Cards</h2>
      <div className="card-container">
        <StaticCard />
        <StaticCard />
        <StaticCard />
        <StaticCard />
        <StaticCard />
        <StaticCard />
      </div>
      <Gallery />
      <div className="profile-card-wrapper">
        <ProfileCard />
      </div>
      <FeatureList />
      <StaticArticle />
    </DashboardLayout>
  )
}

export default  App;
