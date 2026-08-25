import { useEffect } from "react";

// Safety net for a known MUI Modal/Drawer/Dialog issue: MUI locks
// `document.body` (overflow + padding-right) while any Modal-based
// component (Dialog, Drawer, Menu) is open, and restores it once the last
// one closes. If two modals open/close in close succession — or a modal
// unmounts abruptly (route change, fast click) — that restore step can
// silently fail, most commonly observed in Chrome, leaving the entire page
// unable to scroll even though nothing is visibly open anymore.
//
// This watches <body> and force-clears the lock whenever no MUI modal is
// actually present in the DOM, so the page self-heals instead of staying
// stuck.
const ScrollLockGuard = () => {
  useEffect(() => {
    const clearStuckLock = () => {
      const modalOpen = document.querySelector(".MuiModal-root");
      if (!modalOpen && document.body.style.overflow === "hidden") {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("padding-right");
      }
    };

    clearStuckLock();

    // Modal portals mount/unmount as direct children of <body>, and MUI
    // toggles the lock via body's style attribute — watching both is enough
    // to catch the moment a modal disappears without releasing the lock.
    const observer = new MutationObserver(clearStuckLock);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
      childList: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollLockGuard;
