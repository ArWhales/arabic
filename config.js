ArabicWhales.com
حيتان العرب - اعدادات المشروع
عشان تفعل تسجيل الدخول الحقيقى وقاعدة البيانات
1. انشئ حساب مجاني على https://supabase.com
(Project) ان شئ مشروع جدید 20
3. من Settings > API انسخ
Project URL
anon public key
الحاقهم مكان القيم ادناه .4
ال موقع PASTE HERE طالما القيم لسه فاضية أو تحمل الكلمة
ماع رض كل ال م ی زات لكن بدون حفظ : Demo Mode)   م ل ب وضع تجريبي
حقيقي في قاعدة بيانات وبدون فرض تسج یا ال دخول اجباری
*/
const SUPABASE_URL  "PASTE_HERE";
const SUPABASE_ANON_KEY "PASTE_HERE" 
const IS_BACKEND_CONFIGURED =
SUPABASE_URL !== "PASTE_HERE" &&
SUPABASE_ANON_KEY !== "PASTE_HERE" &&
SUPABASE_URL.startsWith("https://");
let supabaseClient null;
 مثال https://xxxxx.supabase.co
// مفتاح anon public من إعدادات المشروع
if (IS_BACKEND_CONFIGURED && window.supabase) {
}
supabaseClient  window.supabase.createClient (SUPABASE_URL, SUPABASE_ANON_KEY);
Page 1
config.js
