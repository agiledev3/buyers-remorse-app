import { useState } from "react";
import { isMobile } from "react-device-detect";

const lastPromptedAt = "appInstallLastPromptedAt";
const daysToWaitBeforePrompt = 1;

const useAppInstallPrompt = () => {
  const [
    userShouldBePromptedToInstall,
    setUserShouldBePromptedToInstall,
  ] = useState(getUserShouldBePromptedToInstall());

  const handleUserSeeingInstallPrompt = () => {
    setUserShouldBePromptedToInstall(false);
    localStorage.setItem(lastPromptedAt, new Date().toISOString());
  };

  return [
    isMobile && userShouldBePromptedToInstall,
    handleUserSeeingInstallPrompt,
  ];
};

function getUserShouldBePromptedToInstall() {
  //app installed
  if (navigator.standalone) {
    return false;
  }
  const lastPrompt = localStorage.getItem(lastPromptedAt);
  //never prompted
  if (!lastPrompt) {
    return true;
  }
  const daysSinceLastPrompt = (new Date() - Date.parse(lastPrompt)) / 86400000;
  return (
    isNaN(daysSinceLastPrompt) || daysSinceLastPrompt > daysToWaitBeforePrompt
  );
}

export default useAppInstallPrompt;
