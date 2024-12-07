
const applicationServerPublicKey = 'BE7ZPjA3j6-qXbvhFkysrUFdbK-dQRJB384qANGgW3B1tW1kaGjNsIG4V-xDQzdRCZM3xU0FWjC1Ve2ZOp_4bRY=';

var isSubscribed = false;
var swRegistration = null;


if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');
  navigator.serviceWorker.register('/serviceworker.js')
  .then(function(swReg) {
    console.log('Service Worker is registered', swReg);

    swRegistration = swReg;
    initialiseUI();

    //push notification
  })
  .catch(function(error) {
    console.error('Service Worker Error', error);
  });
} else {
  console.warn('Push messaging is not supported');

}


function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}


function initialiseUI() {

  // Set the initial subscription value
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    isSubscribed = !(subscription === null);

    if (isSubscribed) {
      console.log('User IS subscribed.');
    } else {
      console.log('User is NOT subscribed.');
    }

  });

  subscribeUser();
}


function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
  .then(function(subscription) {
    // console.log('User is subscribed.');

    //updateSubscriptionOnServer(subscription);
    //send subcription to server
    // console.log("subscription:");
    $.post("/account/push/register",subscription.toJSON(), function(resp){

    });
    // console.log(subscription);
    isSubscribed = true;

  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);

  });
}




