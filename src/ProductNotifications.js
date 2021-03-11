import moment from "moment";

const buildNotification = (title, body, onClick) => {
  const notification = new Notification(title, { body });
  notification.onclick = onClick;
  return notification;
};

function showNotification(title, body, onClick) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    return buildNotification(title, body, onClick);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        return buildNotification(title, body, onClick);
      }
    });
  }
}

export default class ProductNotifications {
  constructor(products, onShow, onClick) {
    this._products = products;
    this._onClick = onClick;
    this._onShow = onShow;
  }

  showExpiredReminders() {
    this._products.forEach((product) => {
      const { createdAt, lastNotification, reminderPeriod, name, id } = product;
      const lastNotificationOrCreationDate = lastNotification
        ? moment(lastNotification)
        : moment(createdAt);
      const nextRemiderDateThreshhold = lastNotificationOrCreationDate.add(
        reminderPeriod,
        "days"
      );
      const today = moment();
      if (today.isAfter(nextRemiderDateThreshhold)) {
        showNotification(
          `Hey, a reminder about ${name}`,
          `It passed more than ${reminderPeriod} days since you checked this product.`,
          () => this._onClick(id)
        );
        this._onShow(id);
      }
    });
  }
}
