import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { app } from './firebaseConfig'; // تأكد إن app معمول export في firebaseConfig.js

const messaging = getMessaging(app);

// ✅ طلب صلاحية الإشعارات وجلب التوكن
export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY, // من .env
    });

    if (currentToken) {
      console.log('✅ FCM Token:', currentToken);
      return currentToken;
    } else {
      console.warn('⚠️ لم يتم توليد FCM Token - قد تكون الإشعارات مرفوضة.');
      return null;
    }
  } catch (err) {
    console.error('❌ خطأ أثناء جلب FCM Token:', err);
    return null;
  }
};

// ✅ استقبال الإشعارات أثناء عمل الموقع (foreground)
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('📩 إشعار وارد في الـ foreground:', payload);
      resolve(payload);
    });
  });
