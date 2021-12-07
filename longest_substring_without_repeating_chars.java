
class Solution {
    public int lengthOfLongestSubstring(String s) {


        /*
        Açıklama:

        İki pointer kullan. Sliding Window Tech.

        B pointerı stringi bitirene kadar bir sağa kayacak.

        Eğer kaydığı harf şu an hashset'te yoksa, o harfi ekle.
        Mevcut global max ile şu anki hashset boyutunu kıyasla.
        B'yi bir sağa al.
        --
        Eğer kaydığı harf zaten hashset'te varsa, tekrar ettik demektir. A...A olmuş.
        Burada tekrar ettiğimiz harf, A pointer'ın tuttuğu harf.
        O harfi hashset'ten çıkarıp A'yı bir sağa kaydır.
        Döngüye devam et.

         */

        int p1 = 0;
        int p2 = 0;
        int max = 0;

        HashSet<Character> currentCharacters = new HashSet<>();

        while(p2 < s.length()) {

            char currentChar = s.charAt(p2);

            if(!currentCharacters.contains(currentChar)){
                currentCharacters.add(currentChar);
                p2++;
                max = Math.max(max, currentCharacters.size());
            } else {
                currentCharacters.remove(s.charAt(p1));
                p1++;
            }

        }

        return max;
    }
}
