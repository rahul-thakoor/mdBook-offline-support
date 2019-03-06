var indexController = this;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then(registration => {
        if (registration.waiting) {
          indexController.updateReady(registration.waiting);
          return;
        }
        if (registration.installing) {
          indexController.trackInstalling(registration.installing);
          return;
        }

        registration.addEventListener("updatefound", function() {
          indexController.trackInstalling(registration.installing);
        });

        console.log(`Service Worker registered! Scope: ${registration.scope}`);
      })
      .catch(err => {
        console.log(`Service Worker registration failed: ${err}`);
      });
  });
}

function trackInstalling(worker) {
  var indexController = this;
  worker.addEventListener("statechange", function() {
    if (worker.state == "installed") {
      indexController.updateReady(worker);
    }
  });
}

function updateReady(worker) {
  var res = confirm("New version available, reload page?");
  if (res) {
    worker.postMessage({ action: "skipWaiting" });
    location.reload();
  }
}
