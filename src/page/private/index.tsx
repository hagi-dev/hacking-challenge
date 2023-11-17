import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from './Login';
import { BuildYourPlan } from './BuildYourPlan';
import { ThankYou } from './ThankYou';



const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/arma-tu-plan" element={<BuildYourPlan />} />
      <Route path="/gracias" element={<ThankYou />} />
    </Routes>
  );
};

export default Page;