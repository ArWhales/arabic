/* ============================================================
   إعدادات المشروع — حيتان العرب
   ============================================================
   عشان تفعّل تسجيل الدخول الحقيقي وقاعدة البيانات:
   1. أنشئ حساب مجاني على https://supabase.com
   2. أنشئ مشروع جديد (Project)
   3. من Settings > API انسخ:
      - Project URL
      - anon public key
   4. الصقهم مكان القيم أدناه

   طالما القيم لسه فاضية أو تحمل الكلمة PASTE_HERE، الموقع
   يعمل بوضع تجريبي (Demo Mode): يعرض كل الميزات لكن بدون حفظ
   حقيقي في قاعدة بيانات، وبدون فرض تسجيل دخول إجباري.
   ============================================================ */

const SUPABASE_URL = "PASTE_HERE";       // مثال: https://xxxxx.supabase.co
const SUPABASE_ANON_KEY = "PASTE_HERE";  // مفتاح anon public من إعدادات المشروع

const IS_BACKEND_CONFIGURED =
  SUPABASE_URL !== "PASTE_HERE" &&
  SUPABASE_ANON_KEY !== "PASTE_HERE" &&
  SUPABASE_URL.startsWith("https://");

let supabaseClient = null;
if (IS_BACKEND_CONFIGURED && window.supabase) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
